import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  notesForm: FormGroup;
  content;
  count;
  textareaContent: string;
  textarealength = 200;
  remaining = 200;
  maximumwords =  true;
  name: string;
  class: string;

  constructor(private studentservice: StudentService) { }

  ngOnInit(): any {
    this.class = localStorage.getItem('class');
    this.name = localStorage.getItem('name');
    this.notesForm = new FormGroup({
      class : new FormControl('', Validators.required),
      notesdata : new FormControl('', Validators.required)
    });
  }

  // submit notes
  submitnotes(event) {
    event.target.disabled = false;
    console.log(this.notesForm.value);
    this.notesForm.reset();
  }

  formchanges(event) {
    console.log(this.content);
    console.log(this.notesForm.value);
    this.textareaContent = this.notesForm.value.notesdata;
    this.remaining = this.textarealength - this.textareaContent.split(' ').length;
    if (this.content.split(' ').length >= 200) {
      let contentsplit = this.content.split(' ');
      // console.log(contentsplit);
      this.content = contentsplit.splice(0, 200).join(' ');
      this.count = this.content.length;
      console.log(this.content);
    }
  }

  // sending notes content
  sendNotes() {
    // console.log(this.notesForm);
    var content = {data: this.notesForm.value, username: localStorage.getItem('username')};
    // console.log(content);
    this.studentservice.saveNotes(content).subscribe(result => {
      console.log(result);
      if (result['message'] === 'notes saved successfully') {
        alert('Notes Saved successfully');
      }
    });
  }

}
