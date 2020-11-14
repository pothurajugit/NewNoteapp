import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { StudentsComponent } from './students.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [{path: 'notes', component: NotesComponent},
                        {path: 'studentdashboard', component: StudentsComponent},
                        {path: 'teachersdashboard', component: TeacherComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
