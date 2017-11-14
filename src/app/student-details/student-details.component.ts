import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentManagementService} from "../student-management.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public currentStudent: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentManagementService) {
  }
  @Input('student')

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIndeks = params.get('index');
        const studentPromise = this.studentService.findByIndex(studentIndeks);
        studentPromise.catch(
          error => {
            console.error(error.errorMessage);
          }
        );
        return studentPromise;
      })
      .subscribe(student => {
        this.currentStudent = student;
      });

  }
}
