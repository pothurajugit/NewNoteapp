import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  username;
  loading = true;
  notesData: any[] = [];
  showModel = false;
  contentnotes;
  currentId;
  constructor(private studentservice: StudentService, private router:Router) { }

  ngOnInit() {
    console.log('Current id IS', this.currentId)
    if (!localStorage.getItem('token')) {
      alert('Please login');
      this.router.navigateByUrl('/login');
    }
    this.studentservice.getNotes();
    this.studentservice.notesSubject.subscribe((data: any) => {
      this.loading = false;
      this.notesData = data;
    });
  }

  lgout() {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      alert('Logout Success')
      this.router.navigateByUrl('/login');
    }
  }

  // close model
  closeModel() {
    if (this.showModel) {
      this.showModel = false;
    }
  }

  // edit notes content
  editNotes(id, content) {
    this.currentId = id;
    console.log(this.currentId);
    this.contentnotes = content;
    this.showModel = true;
  }
  // update 
  updateNotes() {
    console.log('Curent id is', this.currentId);
    console.log(this.contentnotes);
    this.studentservice.updateNotes({id: this.currentId, content: this.contentnotes}).subscribe(response => {
      if (response['message'] === 'Update success') {
        this.showModel = false;
        this.studentservice.getNotes();
        alert('Update Success');
      }
    });
  }
  // delete notes content
  deleteNotes(id) {
    this.studentservice.deleteNotes(id).subscribe(result => {
      if (result['message'] === 'Deleted success'){
        this.studentservice.getNotes();
        alert('Notes Deleted');
      }
    });
  }
}
