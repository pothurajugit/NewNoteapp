import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private service: StudentService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // login
  login() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(result => {
        console.log(result);
        if (result['message'] === 'username not available') {
          alert('Please enter an valid username');
        }
        if (result['message'] === 'Invaid password') {
          alert('Please enter a valid password');
        }
        if (result['message'] === 'Login success') {
          this.loginForm.reset();
          localStorage.setItem('token', result['token']);
          localStorage.setItem('name', result['name']);
          localStorage.setItem('username', result['username']);
          localStorage.setItem('class', result['class']);;
          alert('Login Success');
          if (result['username'] === 'Teacher') {
            this.route.navigateByUrl('/teachersdashboard');
          } else {
            this.route.navigateByUrl('/studentdashboard');
          }
        }
      });
    }
  }
}
