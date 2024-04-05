import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherDetailsEditComponent } from './components/teacher-details-edit/teacher-details-edit.component';
import { isLoggedInGuard } from '../guards/is-logged-in.guard';
import { onlyPrincipalGuard } from '../guards/only-principal.guard';

const TEACHER_ROUTES: Routes = [
  {
    path: '',
    canActivate: [isLoggedInGuard, onlyPrincipalGuard],
    component: TeacherListComponent,
  },
  {
    path: ':id',
    canActivate: [isLoggedInGuard, onlyPrincipalGuard],
    component: TeacherDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(TEACHER_ROUTES)],
  exports: [RouterModule],
})
export class TeacherRouting {}
