import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { StudentDataModel } from './models/student.model';

@Injectable()

export class AddstudentService {

  private _getUrl1 = "http://localhost:3000/student/dashboard";
  private _getUrl2 = "http://localhost:3000/student/event-list";

  constructor(private _http: Http) { }

  addstudent(student: StudentDataModel) {
    return this._http.post(this._getUrl1, student)
    .map((response: Response) => response.json());
    //throw new Error("Method not implemented.");
  }

  getstudents(){
    return this._http.get(this._getUrl2)
    .map((response: Response) => response.json());
  }
}
