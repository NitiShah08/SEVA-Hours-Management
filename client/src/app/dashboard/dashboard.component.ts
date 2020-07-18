import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { Router } from '@angular/router';
import { ScheduledataService } from '../scheduledata.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StudentDataModel } from '../models/student.model';
import { AddstudentService } from '../addstudent.service';
import { LoginModel } from '../models/login.model';
import { GetuidService } from '../getuid.service';
import { HistoryService } from '../history.service';
import { HistoryModel } from '../models/history.model';
import { count } from 'rxjs/operator/count';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  student: StudentDataModel = new StudentDataModel();
  userhist: HistoryModel = new HistoryModel();
  eventForm: FormGroup;
  hide = true;

  events: Array<Event>;
  hist: Array<HistoryModel>;
  //formBuilder: any;

  constructor(
    private scheduledata: ScheduledataService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private addstudent: AddstudentService,
    private getuid: GetuidService,
    private history: HistoryService) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      attend: [''],
    })
    console.log("haha");
    this.scheduledata.getData()
    .subscribe(resEventData => this.events = resEventData);
    console.log("haha");
    this.history.getData()
    .subscribe(resHistoryData => this.hist = resHistoryData);
    console.log("haha");
  }

  selectedEvent: Event;
  user: LoginModel;
  attend: boolean; 
  temp: Number;
  //userhist: HistoryModel;

  value(event: Event){
    if(confirm("Are you sure you want to attend the event " +event.beach+ " at " +event.date)){
      this.student.attendance = true;
      this.selectedEvent = event;
      //alert(event);
      console.log(this.student);
      console.log(this.selectedEvent);
      this.user = this.getuid.getData();
      console.log(this.user);
    //this.selectedEvent = this.getuid.getEvent();
    //this.router.navigate(['/event-list']);
      
    //console.log(this.user); 
      //if(this.student.attendance){
      //console.log('hahaha');
        this.student.uid = this.user.uid;
      //this.student.attendance = true;
      //this.selectedEvent = event;
        this.student.actiBeach = this.selectedEvent.beach;
        this.student.actiDate = this.selectedEvent.date;
        this.student.actiTime = this.selectedEvent.starttime;
        this.addstudent.addstudent(this.student)
        .subscribe(resStudentAttendance => this.student = resStudentAttendance)
    //}
  }
  else{
    this.student.attendance = false;
  }
    //this.student.attendance = attend;
}

viewHistory(){
  console.log("Entered");
  for(let h = 0; h < this.hist.length; h++){
    this.user = this.getuid.getData();
    console.log(this.user.uid);
    console.log(this.hist[h].uid);
    if(this.user.uid == this.hist[h].uid){
      console.log(this.hist[h]);
      //this.temp = this.user.uid;
      this.userhist.beach = this.hist[h].beach;
      this.userhist.date = this.hist[h].date;
      this.userhist.hours = this.hist[h].hours;
      //print(this.hist.beach);
    }
  
  }
}

}
