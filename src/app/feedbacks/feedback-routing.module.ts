import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbacksListComponent } from './components/feedbacks-list/feedbacks-list.component';
import { CreateFeedbackComponent } from './components/create-feedback/create-feedback.component';
import { isLoggedInGuard } from '../guards/is-logged-in.guard';
import { onlyPrincipalTeacherGuard } from '../guards/only-principal-teacher.guard';
import { onlyPrincipalGuard } from '../guards/only-principal.guard';

const FEEDBACKS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [isLoggedInGuard, onlyPrincipalTeacherGuard],
    component: FeedbacksListComponent,
  },
  {
    path: 'create',
    canActivate: [isLoggedInGuard, onlyPrincipalGuard],
    component: CreateFeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(FEEDBACKS_ROUTES)],
  exports: [RouterModule],
})
export class FeedbackRouting {}
