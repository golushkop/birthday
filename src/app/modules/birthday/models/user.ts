/**
 * Created by golushko.p on 15.12.2017.
 */
export class User{
  name: string;

  constructor(userInfo: any = '') {
    this.name = userInfo.name
  }
}
