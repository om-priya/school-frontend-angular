import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackRouting } from './feedback-routing.module';
import { FeedbacksListComponent } from './components/feedbacks-list/feedbacks-list.component';
import { CreateFeedbackComponent } from './components/create-feedback/create-feedback.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [FeedbacksListComponent, CreateFeedbackComponent],
  imports: [CommonModule, FeedbackRouting, TableModule],
})
export class FeedbacksModule {}
