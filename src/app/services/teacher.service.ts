import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  classsubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getclassdata(classnumber) {
    this.http.post('/student/classlist/' + classnumber, null).subscribe(data => {
      this.classsubject.next(data);
    });
  }

    // edit notes
    updateNotes(data) {
      return this.http.put('/teacher/updatecontent', data);
    }
}
