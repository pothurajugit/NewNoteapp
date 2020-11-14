import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-studentheader',
  templateUrl: './studentheader.component.html',
  styleUrls: ['./studentheader.component.css']
})
export class StudentheaderComponent implements OnInit {
  constructor(private route: Router, private studentService: StudentService) { }

  ngOnInit(): void {
  }

  // logout
  lgout() {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      alert('Logout success');
      this.route.navigateByUrl('/login');
    }
  }
}
