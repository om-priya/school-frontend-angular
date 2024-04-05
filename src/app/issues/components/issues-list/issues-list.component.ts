import { Component, OnDestroy, OnInit } from '@angular/core';
import { IssuesService, issueData } from '../../services/issues.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.css',
})
export class IssuesListComponent implements OnInit, OnDestroy {
  fetchIssueSubscription: Subscription;
  issuesData: issueData[];

  constructor(
    private issueService: IssuesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchIssueSubscription = this.issueService.getIssues().subscribe({
      next: (responseData) => {
        this.issuesData = responseData.data.json;
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
    this.fetchIssueSubscription?.unsubscribe();
  }
}
