import {Component, OnInit} from '@angular/core';
import {StudentManagementService} from './student-management.service';
import {Student} from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentManagementService]
})

export class AppComponent {
  title = 'Labaratoriski po Web Programiranje';
  students: Student[];
  currentStudent: Student;

  constructor (private studentService: StudentManagementService) {
    this.studentService.getStudents().then(rezultat => this.students = rezultat);
  }



  onSelect(student: Student):  void {
    this.currentStudent = student;
  }

}
