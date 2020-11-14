import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { NotesComponent } from './notes/notes.component';
import { StudentheaderComponent } from './studentheader/studentheader.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [StudentsComponent, NotesComponent, StudentheaderComponent, TeacherComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
