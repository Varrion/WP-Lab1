import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../model/student";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentManagementService} from "../student-management.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  students: Student[];
  public currentStudent: Student;
  private isEdit = false;
  constructor(private route: ActivatedRoute, private studentService: StudentManagementService, private router: Router) {
    this.studentService.getStudents().then(students => this.students = students);
  }


  ngOnInit(): void {
    this.currentStudent = new Student();

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
        this.isEdit = true;
      });
  }

  public save(): void {
    this.studentService.save(this.currentStudent)
      .then(student => this.currentStudent = student);
    this.currentStudent = new Student();
    this.router.navigateByUrl('/');
  }

  public edit() {
    this.studentService.edit(this.currentStudent)
      .then(student => this.currentStudent = student);
    this.router.navigateByUrl('/');
  }

}
