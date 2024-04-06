import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { FeedbackData } from '../../feedback.model';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'school-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrl: './feedbacks-list.component.css',
})
export class FeedbacksListComponent implements OnInit, OnDestroy {
  fetchFeedbackSubscriber: Subscription;
  feedbacksData: FeedbackData[];

  constructor(
    private feedbackService: FeedbackService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // subscribing get feedbacks for fetching the data
    this.fetchFeedbackSubscriber = this.feedbackService
      .getFeedbacks()
      .subscribe({
        next: (resposeData) => {
          this.feedbacksData = resposeData.data.json;
        },
        error: (error) => {
          // showing toast in frontend
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          });
        },
      });
  }

  ngOnDestroy(): void {
    this.fetchFeedbackSubscriber?.unsubscribe();
  }
}
