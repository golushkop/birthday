import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import {Subscription} from "rxjs/Subscription";
import {isUndefined} from "util";

@Directive({
  selector: '[appPopover]',
})
export class PopoverDirective implements OnInit{
  private hasView=false;
  private globalClick:Subscription;
  private listening = false;
  @Input() popoverId: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private _elRef: ElementRef
  ) { }

  ngOnInit() {
    this.globalClick = Observable
      .fromEvent(document, 'click')
      .delay(1)
      .do(() => {
        this.listening = true;
      }).subscribe((event:MouseEvent) => {
        this.checkWhereClicked(event);
      });
  }

  private showPopover() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }

  private hidePopover() {
    this.viewContainer.clear();
    this.hasView = false;
  }

  private checkWhereClicked(event) {
    if (event instanceof MouseEvent && this.listening === true) {
      if (this._elRef.nativeElement && this.isDescendant(this._elRef.nativeElement.parentNode, event.target)
        && event.target['nodeName']!== 'BODY') {
        this.hasView ? this.hidePopover() : this.showPopover();
      } else {
        this.hidePopover()
      }
    }
  }

  private isDescendant(parent, child) {
    let node = child;
    while (!isUndefined(node) && node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }

  ngOnDestroy() {
    this.globalClick.unsubscribe()
  }

}
