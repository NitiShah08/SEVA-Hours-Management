import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StudentDataModel } from '../models/student.model';
import { AddstudentService } from '../addstudent.service';
import { HistoryService } from '../history.service';
import { HistoryModel } from '../models/history.model';
//import { StudentattendanceService } from '../studentattendance.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  //inputs: ['events']
})
export class EventListComponent implements OnInit {

  /*event: Event[] = [
    {"beach": "a", "date": new Date(2013,11,10), "hours": 1, "starttime": 10}
  ]*/
  //event: Event = new Event();

  //activitySubmitForm: FormGroup
    //firstName: new FormControl()

  historymodel : HistoryModel = new HistoryModel();

  activities: Array<StudentDataModel>
  constructor(
    private addstudent: AddstudentService,
    private history: HistoryService,
    //private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    console.log('Entered');
    this.addstudent.getstudents()
    .subscribe(resEventData => this.activities = resEventData);
    //console.log(this.activities);

    /*console.log(this.event.beach);
    this.activitySubmitForm = this.formBuilder.group({
      Yes:  new FormControl(),
    No:  new FormControl()
    })
    console.log(this.event.beach);*/
  }

  selectedActi: StudentDataModel

  validate(activity: StudentDataModel){
    //activity: StudentDataModel;
    if(confirm("Validate attendance for " +activity.uid+ " for beach " +activity.actiBeach)){
      this.selectedActi = activity;
      console.log(this.selectedActi.actiBeach);
      this.historymodel.uid = this.selectedActi.uid;
      this.historymodel.beach = this.selectedActi.actiBeach;
      this.historymodel.date = this.selectedActi.actiDate;
      this.historymodel.hours = this.selectedActi.actiHours;
      //this.historymodel.attendance = this.historymodel.hours + this.historymodel.attendance;
      console.log(this.historymodel);
      this.history.validateattendance(this.historymodel)
      .subscribe(resEventData => this.activities = resEventData);
    }
    //console.log(activity);
    /**/
  }
}
