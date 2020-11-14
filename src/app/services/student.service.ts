import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  notesSubject = new Subject();

  constructor(private http: HttpClient, private route: Router) { }
  // register
  createStudent(data) {
    return this.http.post('/student/registration', data);
  }
  // login
  login(logindata) {
    return this.http.post('/student/login', logindata);
  }

  // save notes content
  saveNotes(content) {
    return this.http.post('/teacher/savenotes', content);
  }

  // get students notes data
  getNotes() {
    this.http.get('/student/notedrecords/' + localStorage.getItem('username')).subscribe(data => {
      this.notesSubject.next(data['notesData']);
    });
  }
  // edit notes
  updateNotes(data) {
    return this.http.put('/student/updatecontent', data);
  }
    // delete notes
    deleteNotes(id) {
      return this.http.delete('/student/deletenotes/' + id);
    }
}
