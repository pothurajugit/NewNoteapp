import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  classes = ['Firstclass', 'Secondclass', 'Thirdclass', 'Fourthclass', 'Fifthclass', 'Sixthclass', 'Seventhclass', 'Eighthclass', 'Ninthclass', 'Tenthclass']
  classList = [];
  showModel = false;
  contentnotes: string;
  currentId;
  currentclass;
  loading = false;
  editdata = true;
  constructor(private router: Router, private teacherservice: TeacherService) { }

  ngOnInit(): void {
  }

  lgout() {
    localStorage.clear();
    alert('Logout Success');
    this.router.navigateByUrl('/login');
  }

  curentStudent(i) {
    this.currentclass = i;
    this.editdata = false;
    console.log(i);
    this.teacherservice.getclassdata(i);
    this.teacherservice.classsubject.subscribe(data => {
      // console.log(data);
      if (data) {
        this.loading = false;
        this.classList = data['message'];
        console.log(this.classList);
      }
    });
  }
  editNotes(id, content) {
    this.currentId = id;
    console.log(this.currentId);
    this.contentnotes = content;
    this.showModel = true;
  }
  updateNotes() {
    console.log('Curent id is', this.currentId);
    console.log(this.contentnotes);
    this.teacherservice.updateNotes({id: this.currentId, content: this.contentnotes}).subscribe(response => {
      if (response['message'] === 'Update success') {
        this.showModel = false;
        this.teacherservice.getclassdata(this.currentclass);
        alert('Update Success');
      }
    });
  }
  //close model
  closeModel() {
    this.showModel = false;
  }
}
