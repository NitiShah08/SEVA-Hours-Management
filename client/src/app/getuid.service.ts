import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginModel } from './models/login.model';
import { BeachModel } from './models/beach.model';
import { Event } from './event';

@Injectable()
export class GetuidService {

  /*private uid1 = new BehaviorSubject(0);
  currentuid = this.uid1.asObservable();*/

  constructor() { }

  private user: LoginModel;
  private event: Event;

  setData(user){
    this.user = user;
  }

  getData(){
    let temp = this.user;
    this.clearData();
    return temp;
  }

  clearData(){
    this.user = undefined;
  }

  setEvent(event){
    this.event = event;
  }

  getEvent(){
    let temp = this.event;
    this.clearData();
    return temp;
  }

  clearEvent(){
    this.event = undefined;
  }
}
