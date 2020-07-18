//to get event dta entered by admin
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ScheduledataService {

  private _getUrl = "http://localhost:3000/event/events";

  constructor(private _http: Http) { }

  getData(){
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

}

