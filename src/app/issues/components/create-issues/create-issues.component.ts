import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IssuesService } from '../../services/issues.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-create-issues',
  templateUrl: './create-issues.component.html',
  styleUrl: './create-issues.component.css',
})
export class CreateIssuesComponent implements OnDestroy {
  issueMessage: string = '';
  raiseIssueSubscription!: Subscription;

  constructor(
    private issueService: IssuesService,
    private messageService: MessageService
  ) {}

  raiseIssue(formData: NgForm) {
    console.log(formData.value);
    this.raiseIssueSubscription = this.issueService
      .raiseIssues(formData.value)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          formData.reset();
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
    this.raiseIssueSubscription?.unsubscribe();
  }
}
