/**
 * Created by golushko.p on 15.12.2017.
 */
export class User{
  name: string;
  gender: string;
  last_name: string;
  picture: Object;
  phone: string;
  email: string;

  constructor(name='', gender= '', last_name= '', picture= {}, phone='', email='') {
    this.name = name;
    this.gender = gender;
    this.last_name = last_name;
    this.picture = picture;
    this.phone = phone;
    this.email = email
  }
}
