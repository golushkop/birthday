import { Injectable } from '@angular/core';

@Injectable()
/**
 * Класс урлов для Django REST.
 */
export class UrlModels {
  public static randomuser = 'https://randomuser.me/api/';

  public static getUserByName = UrlModels.randomuser;

  public static autoComplete = 'https://hotelbook.ru/api/v1/ru/location/autocomplete'


}
