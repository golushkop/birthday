import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public navigateTo(place) {
    this._router.navigate([place])
  }

}
