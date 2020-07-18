import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppHttpService } from './services/app-http.service';
import { AuthService } from './services/auth.service';
import { HistoryService } from './history.service';
//import { NewComponentComponent } from './new-component/new-component.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './event-list/event-list.component';
import { ScheduledataService } from './scheduledata.service';
import { AddstudentService } from './addstudent.service';
//import { StudentattendanceService } from './studentattendance.service';
import { GetuidService } from './getuid.service';
import { HistoryComponent } from './history/history.component';
//import { HistoryComponent } from './history/history.component';
//import { EventListComponent } from './event-list/event-list.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    //DashboardComponent,
    //NewComponentComponent,
    AdmindashboardComponent,
    DashboardComponent,
    EventListComponent,
    HistoryComponent,
    //HistoryComponent,
    //EventListComponent,
    //DashboardComponent,
    //DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
    //EventListComponent
  ],
  providers: [AppHttpService, AuthService, ScheduledataService, AddstudentService, GetuidService, HistoryService],
  bootstrap: [AppComponent],
  exports: [
    //EventListComponent
  ]
})
export class AppModule { }
