import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'school-create-issues',
  templateUrl: './create-issues.component.html',
  styleUrl: './create-issues.component.css',
})
export class CreateIssuesComponent implements OnDestroy {
  issueMessage: string = '';
  raiseIssueSubscription: Subscription;

  constructor(
    private issueService: IssuesService,
    private messageService: MessageService
  ) {}

  raiseIssue(formData: NgForm) {
    this.raiseIssueSubscription = this.issueService
      .raiseIssues(formData.value)
      .subscribe({
        next: (responseData) => {
          // Showing toast and reseting the form
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          formData.reset();
        },
        error: (error) => {
          // showing toast in case of error
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          });
        },
      });
  }

  ngOnDestroy(): void {
    this.raiseIssueSubscription?.unsubscribe();
  }
}
