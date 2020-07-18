import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { BeachModel } from '../models/beach.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray} from '@angular/forms';
import { GetuidService } from '../getuid.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})

export class AdmindashboardComponent implements OnInit {

  event: BeachModel = new BeachModel();
  timeslots: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private getuid: GetuidService) { }

  ngOnInit() {

    this.timeslots = this.formBuilder.group({
      beach: ['',Validators.required],
      hours: ['', Validators.required],
      date: ['', Validators.required],
      starttime: ['', Validators.required],
    });
    this.getuid.setEvent(this.event);
  }

  printf(){
    alert("Data entered successfully");
  }

  onSubmit() {
    //console.log('Entered');
    this.authService.addEvent(this.event)
    .subscribe(data => {
      //console.log(data);
      if (data.success) {
        //document.getElementById("idk").innerHTML = "Data entered";
          //this.router.navigate(['/admindashboard']);
      } else {
        console.log('Failed');
      }
    });
  }

  verify(){
    this.router.navigate(['/event-list']);
  }
}
