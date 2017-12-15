import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'

@Component({
  selector: 'app-find-bday',
  templateUrl: './find-bday.component.html',
  styleUrls: ['./find-bday.component.css']
})
export class FindBdayComponent implements OnInit {
  public user: Object;

  constructor() { }

  ngOnInit() {
    this.user = new User()
  }

  public searchUser() {
    console.log(this.user)
  }

}
