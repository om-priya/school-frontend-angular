import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrl: './create-feedback.component.css',
})
export class CreateFeedbackComponent implements OnInit, OnDestroy {
  feedbackMessage!: string;
  user_id!: string;
  giveFeedbackSubscriber!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedbackService: FeedbackService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.user_id = this.route.snapshot.params['id'];
  }

  giveFeedback(formData: NgForm) {
    console.log(formData.value);
    this.giveFeedbackSubscriber = this.feedbackService
      .giveFeedback(formData.value, this.user_id)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          this.router.navigate(['teachers']);
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
    this.giveFeedbackSubscriber?.unsubscribe();
  }
}
