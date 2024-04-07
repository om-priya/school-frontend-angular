import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isLoggedInGuard } from '../guards/is-logged-in.guard';
import { onlyPrincipalGuard } from '../guards/only-principal.guard';
import { onlyTeacherGuard } from '../guards/only-teacher.guard';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { CreateIssuesComponent } from './components/create-issues/create-issues.component';

const ISSUES_ROUTING: Routes = [
  {
    path: '',
    canActivate: [isLoggedInGuard, onlyPrincipalGuard],
    component: IssuesListComponent,
  },
  {
    path: 'create',
    canActivate: [isLoggedInGuard, onlyTeacherGuard],
    component: CreateIssuesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ISSUES_ROUTING)],
  exports: [RouterModule],
})
export class IssuesRouting {}
