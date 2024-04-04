import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedbackService, feedbackData } from '../../services/feedback.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'school-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrl: './feedbacks-list.component.css',
})
export class FeedbacksListComponent implements OnInit, OnDestroy {
  fetchFeedbackSubscriber!: Subscription;
  feedbacksData!: feedbackData[];

  constructor(private feedbackService: FeedbackService) {}
  ngOnInit(): void {
    this.fetchFeedbackSubscriber = this.feedbackService
      .getFeedbacks()
      .subscribe((resposeData) => {
        console.log(resposeData);
        this.feedbacksData = resposeData.data.json;
      });
  }
  ngOnDestroy(): void {}
}
