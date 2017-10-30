import {Component, OnInit} from '@angular/core';
import {StudentManagementService, STUDENTS} from './student-management.service';
import {Student} from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentManagementService]
})

export class AppComponent implements OnInit {
  title = 'Labaratoriska1';
  students: Student[];
  currentStudent: Student;

  constructor (private studentService: StudentManagementService) {}


  getStudents(): void {
    this.studentService.getStudents().then(students => this.students = students);
  }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student):  void {
    this.currentStudent = student;
  }

}
