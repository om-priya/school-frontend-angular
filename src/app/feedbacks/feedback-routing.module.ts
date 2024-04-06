import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isLoggedInGuard } from '../guards/is-logged-in.guard';
import { onlyPrincipalGuard } from '../guards/only-principal.guard';
import { onlyPrincipalTeacherGuard } from '../guards/only-principal-teacher.guard';
import { FeedbacksListComponent } from './components/feedbacks-list/feedbacks-list.component';
import { CreateFeedbackComponent } from './components/create-feedback/create-feedback.component';

const FEEDBACKS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [isLoggedInGuard, onlyPrincipalTeacherGuard],
    component: FeedbacksListComponent,
  },
  {
    path: ':id/create',
    canActivate: [isLoggedInGuard, onlyPrincipalGuard],
    component: CreateFeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(FEEDBACKS_ROUTES)],
  exports: [RouterModule],
})
export class FeedbackRouting {}
