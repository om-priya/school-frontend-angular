import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedbackService, feedbackData } from '../../services/feedback.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrl: './feedbacks-list.component.css',
})
export class FeedbacksListComponent implements OnInit, OnDestroy {
  fetchFeedbackSubscriber: Subscription;
  feedbacksData: feedbackData[];

  constructor(
    private feedbackService: FeedbackService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.fetchFeedbackSubscriber = this.feedbackService
      .getFeedbacks()
      .subscribe({
        next: (resposeData) => {
          this.feedbacksData = resposeData.data.json;
        },
        error: (error) => {
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
