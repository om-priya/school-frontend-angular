import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { FeedbackRouting } from './feedback-routing.module';
import { FeedbacksListComponent } from './components/feedbacks-list/feedbacks-list.component';
import { CreateFeedbackComponent } from './components/create-feedback/create-feedback.component';

@NgModule({
  declarations: [FeedbacksListComponent, CreateFeedbackComponent],
  imports: [CommonModule, FeedbackRouting, SharedModule, FormsModule],
})
export class FeedbacksModule {}
