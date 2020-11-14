import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentclass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  registerForm: FormGroup;
  constructor(private studentService: StudentService, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name : new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      class : new FormControl('', Validators.required),
      gender : new FormControl('', Validators.required)
    });
}

// register
registration() {
  console.log(this.registerForm.value);
  if (this.registerForm.valid) {
    this.studentService.createStudent(this.registerForm.value).subscribe(result => {
      console.log(result);
      if (result['message'] === 'Student Registred Success') { 
        alert('Registration Success');
        this.registerForm.reset();
        this.route.navigateByUrl('/login');
      }
      if (result['message'] === 'username name existed') {
        alert('Username already existed choose another one..!')
      }
    });
  }
}
}
