import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'school-create-issues',
  templateUrl: './create-issues.component.html',
  styleUrl: './create-issues.component.css',
})
export class CreateIssuesComponent implements OnDestroy {
  issueMessage: string = '';
  raiseIssueSubscription!: Subscription;

  constructor(private issueService: IssuesService) {}

  raiseIssue(formData: NgForm) {
    console.log(formData.value);
    this.raiseIssueSubscription = this.issueService
      .raiseIssues(formData.value)
      .subscribe((responseData) => {
        console.log('Issue Raised SuccesFully');
        formData.reset();
      });
  }

  ngOnDestroy(): void {
    this.raiseIssueSubscription?.unsubscribe();
  }
}
