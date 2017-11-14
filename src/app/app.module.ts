import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StudentManagementService} from './student-management.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: 'list/', pathMatch: 'full'},
      {path: 'details/:index', component: StudentDetailsComponent},
      {path: 'edit/:index', component: StudentEditComponent},
      {path: 'new', component: StudentEditComponent}
    ])
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
