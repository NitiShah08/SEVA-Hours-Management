import { Injectable } from '@angular/core';
import { StudentDataModel } from './models/student.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HistoryModel } from './models/history.model';

@Injectable()
export class HistoryService {

  private _getUrl = "http://localhost:3000/history/event-list";

  constructor(private _http:Http) { }

  validateattendance(HistoryModel: HistoryModel){
    return this._http.post(this._getUrl, HistoryModel)
    .map((response: Response) => response.json());
  }

  getData(){
    console.log("Entered1");
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }
}
