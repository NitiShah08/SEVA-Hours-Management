import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AppHttpService } from './app-http.service';
import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';
import { BeachModel } from '../models/beach.model';


@Injectable()
export class AuthService {

  constructor(private appHttp: AppHttpService) { }

  registerUser(user: RegisterModel) {
    return this.appHttp.post('http://localhost:3000/users/register', user)
    .map(res => res.json());
  }

  authenticateUser(user: LoginModel) {
    return this.appHttp.post('http://localhost:3000/users/login', user)
    .map(res => res.json());
  }

  addEvent(event: BeachModel){
    //console.log('Enteredd2');
    return this.appHttp.post('http://localhost:3000/event/admindashboard', event)
    .map(res => res.json());
  }

  getData(){
    console.log('Auth service');
    return this.appHttp.get('http://localhost:3000/event/dashboard')
    .map(res => res.json());
  }
}
