import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isLoggedInGuard } from '../guards/is-logged-in.guard';
import { onlyPrincipalGuard } from '../guards/only-principal.guard';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';

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
