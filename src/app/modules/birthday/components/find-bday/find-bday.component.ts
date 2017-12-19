import {Component, forwardRef, OnInit} from '@angular/core';
import { User } from '../../models/user'
import { GetPostBirthdayDataService } from "../../services/get-post-birthday-data.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-find-bday',
  templateUrl: './find-bday.component.html',
  styleUrls: ['./find-bday.component.css'],

})
export class FindBdayComponent implements OnInit {
  public user_bithday: string;
  public users: Array<User>;
  public city_name: string;
  public reactiveForm: FormGroup;
  public cities: Array<string> = [];


  constructor(private _getDataService: GetPostBirthdayDataService,
              private _fb: FormBuilder
  ) {
    this.reactiveForm = this._fb.group({
      city_name: ['']
    })
  }

  ngOnInit() {
    this.prepareParams()
  }

  private prepareParams() {
    this.user_bithday = '';
    this.users = [];

  }

  private getUser(email='') {
    this._getDataService.getUserByBday(email)
      .subscribe(
        (res:any) => {
          if (new Date(res['results'][0]['dob']) < new Date(this.user_bithday)) {
            let user_data = res['results'][0];
            user_data['name']['first'] = user_data['name']['first'].split('').map((x, ind) => {
              if (ind === 0) {
                x = x.toUpperCase()
              }
              return x
            }).join('');
            user_data['name']['last'] = user_data['name']['last'].split('').map((x, ind) => {
              if (ind === 0) {
                x = x.toUpperCase()
              }
              return x
            }).join('');
            this.users.push(new User(user_data.name['first'], user_data.gender, user_data.name['last'],
              user_data.picture, user_data.phone, user_data.email));
          } else {
            this.getUser(res['results'][0]['email'])
          }
        }, (err: any) => this.finish(err)
      )
  }

  public searchUser() {
    const date = new Date(this.user_bithday);
    if (Object.prototype.toString.call(date) === "[object Date]") {
      if (isNaN(date.getTime())) {
        alert('Неверный формат даты')
      } else {
        this.getUser()
      }
    } else {
      alert('Неверный формат даты')
    }
  }

  public tryAutocomplete() {

  }

  public changed_input(event) {
    if (event.valid) {
      this.getAutoComplete(event.city_name)
    }
  }
  private finish(err) {
    console.error(err)
  }

  private getAutoComplete(event) {
    this._getDataService.autocomplete(event)
      .subscribe(
        (res: any)=> {
          this.cities = [];
          this.cities = res.response['cities'].map(x=> {return x.name});
        })
  }




}
