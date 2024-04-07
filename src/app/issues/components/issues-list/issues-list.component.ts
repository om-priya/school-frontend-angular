import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { IssuesService } from '../../services/issues.service';
import { IssueData } from '../../issues.model';

@Component({
  selector: 'school-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.css',
})
export class IssuesListComponent implements OnInit, OnDestroy {
  fetchIssueSubscription: Subscription;
  issuesData: IssueData[];

  constructor(
    private issueService: IssuesService,
    private messageService: MessageService
  ) {}

  // fetching the data while the component is initializing
  ngOnInit(): void {
    this.fetchIssueSubscription = this.issueService.getIssues().subscribe({
      next: (responseData) => {
        this.issuesData = responseData.data.json;
      },
      error: (error) => {
        // to show toast on UI in case of error
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.fetchIssueSubscription?.unsubscribe();
  }
}
