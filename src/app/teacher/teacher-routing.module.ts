import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';

const TEACHER_ROUTES: Routes = [
    {path: '', component: TeacherListComponent},
    {path: ':id', component: TeacherDetailsComponent},
    {path: ':id/edit'}
];

@NgModule({
  imports: [RouterModule.forChild(TEACHER_ROUTES)],
  exports: [RouterModule],
})
export class TeacherRouting {}
