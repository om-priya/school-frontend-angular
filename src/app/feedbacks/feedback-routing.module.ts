import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbacksListComponent } from './components/feedbacks-list/feedbacks-list.component';
import { CreateFeedbackComponent } from './components/create-feedback/create-feedback.component';

const FEEDBACKS_ROUTES: Routes = [
  { path: '', component: FeedbacksListComponent },
  { path: 'create', component: CreateFeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(FEEDBACKS_ROUTES)],
  exports: [RouterModule],
})
export class FeedbackRouting {}
