import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { PrincipalData } from '../../principal.model';
import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'school-principal-list',
  templateUrl: './principal-list.component.html',
  styleUrl: './principal-list.component.css',
})
export class PrincipalListComponent implements OnInit, OnDestroy {
  fetchAllPrincipalsSubscriber: Subscription;
  principalsData: PrincipalData[];

  constructor(
    private principalService: PrincipalService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchAllPrincipalsSubscriber = this.principalService
      .getAllPrincipals()
      .subscribe({
        next: (responseData) => {
          this.principalsData = responseData.data.json;
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

  getSeverity(status: string): string {
    switch (status) {
      case 'pending':
        return 'error';
      case 'approved':
        return 'success';
      default:
        return 'warning';
    }
  }

  redirectToSinglePrincipal(user_id: string): void {
    this.router.navigate(['principals', user_id]);
  }

  ngOnDestroy(): void {
    this.fetchAllPrincipalsSubscriber?.unsubscribe();
  }
}
