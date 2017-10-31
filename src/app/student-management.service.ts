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
  { Ime: 'Dean', Prezime: 'Manceski', Index: 151124, Nasoka: 'IKI'},
  { Ime: 'Ana', Prezime: 'Stoilova', Index: 124004, Nasoka: 'MT'},
  { Ime: 'Slavko', Prezime: 'Rajkoski', Index: 171100, Nasoka: 'KNI'}
];



