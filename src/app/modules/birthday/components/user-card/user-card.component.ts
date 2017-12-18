import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public showPopover=false;
  public user: any;
  public popoverId:string;

  @Input('user')
  public set _user(val: any) {
      this.user = val;
      this.popoverId = 'popover ' + this.user.name + ' ' + this.user.last_name
  };
  constructor() { }

  ngOnInit() {
  }


  public showTooltipOnClick() {
    this.showPopover = true;
  }



}
