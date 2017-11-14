import { Injectable } from '@angular/core';
import {Student} from './model/student';

@Injectable()
export class StudentManagementService {

  private STUDENTS: Student[] = [
    { Ime: 'Tomislav', Prezime: 'Anastasovski', Index: "153033", Nasoka: 'Pet'},
    { Ime: 'Dean', Prezime: 'Manceski', Index: "151124", Nasoka: 'IKI'},
    { Ime: 'Ana', Prezime: 'Stoilova', Index: "124004", Nasoka: 'MT'},
    { Ime: 'Slavko', Prezime: 'Rajkoski', Index: "171100", Nasoka: 'KNI'}
  ];




  public getStudents(): Promise <Student[]>  {
    return Promise.resolve(this.STUDENTS);
  }

  constructor() {}

  public findByIndex(index: string): Promise<Student> {
    const result = this.STUDENTS.filter(student => student.Index === index);
    if (result && result.length > 0) {
      return Promise.resolve(result[0]);
    } else {
      return Promise.reject({
        errorMessage: 'No student with the given index found',
        errorCode: 404
      });
    }
  }

  save(student: Student): Promise<Student> {
    this.STUDENTS.push(student);
    return Promise.resolve(student);
  }

  edit(student: Student): Promise<Student> {
    const result = this.STUDENTS.filter(s => s.Index === student.Index)[0];
    result.Ime = student.Ime;
    result.Prezime = student.Prezime;
    result.Nasoka = student.Nasoka;
    return Promise.resolve(student);
  }
}




