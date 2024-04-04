import { Component, OnDestroy, OnInit } from '@angular/core';
import { IssuesService, issueData } from '../../services/issues.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'school-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.css',
})
export class IssuesListComponent implements OnInit, OnDestroy {
  fetchIssueSubscription!: Subscription;
  issuesData!: issueData[];

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.fetchIssueSubscription = this.issueService
      .getEvents()
      .subscribe((responseData) => {
        console.log(responseData);
        this.issuesData = responseData.data.json
      });
  }
  ngOnDestroy(): void {
    this.fetchIssueSubscription?.unsubscribe();
  }
}
