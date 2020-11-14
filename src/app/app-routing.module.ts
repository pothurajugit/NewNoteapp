import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';


// tslint:disable-next-line: max-line-length
const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
                        {path: 'login', component: LoginComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'studentdashboard', component: StudentsComponent}];
                        //  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

