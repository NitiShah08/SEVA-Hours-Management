import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray} from '@angular/forms';
import { GetuidService } from '../getuid.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  /*loginForm = new FormGroup({
    uid: new FormControl(''),
    password: new FormControl('')
  });*/
  //hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private getuid: GetuidService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uid: ['',[Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.getuid.setData(this.user);
   /* this.loginForm = this.formBuilder.group({
      'email': [this.user.uid, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });*/
  }

  onLoginSubmit() {
    this.authService.authenticateUser(this.user)
    .subscribe(data => {
      if (data.success) {
        console.log(data);
        if(this.user.uid==0){
          this.router.navigate(['/admindashboard']);
        }
        else{
          this.router.navigate(['/dashboard']);
        }
      } else {
        console.log('Failed');
        alert('Login Unsuccessful, Credentials are wrong');
      }
    });
  }

}
