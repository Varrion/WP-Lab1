import { Injectable } from '@angular/core';
import {Student} from './model/student';

@Injectable()
export class StudentManagementService {

  getStudents(): Promise <Student[]>  {
    return Promise.resolve(STUDENTS);
  }

  constructor() {}

}
export const STUDENTS: Student[] = [
  { Ime: 'Tomislav', Prezime: 'Anastasovski', Index: 153033, Nasoka: 'Pet'},
  { Ime: 'Tomislav1', Prezime: 'Anastasovski1', Index: 153034, Nasoka: 'KNI'},
  { Ime: 'Tomislav2', Prezime: 'Anastasovski2', Index: 153034, Nasoka: 'KNI'},
  { Ime: 'Tomislav3', Prezime: 'Anastasovski3', Index: 153034, Nasoka: 'KNI'}
];



