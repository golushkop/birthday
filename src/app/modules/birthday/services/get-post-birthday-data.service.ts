import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { UrlModels } from "../../../models/url.models";

@Injectable()
export class GetPostBirthdayDataService {

  constructor(private _http: HttpClient) { }

  public getUserByBday(email): Observable<any> {
    const params = email ? {params: {'seed': email}} : null;
    if (params) {
      return this._http.get(UrlModels.getUserByName, params)
    } else {
      return this._http.get(UrlModels.getUserByName)
    }
  }

  public autocomplete(city): Observable<any> {
    return this._http.get(UrlModels.autoComplete, {headers:{'X-HB-Token':'c3b4e37d4788562fc632d6f0ca09cbe7'},
      params: {'expanded': 0, 'term': city}})
  }

}
