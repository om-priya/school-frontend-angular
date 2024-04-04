import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  PrincipalService,
  principalData,
} from '../../services/principal.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-principal-list',
  templateUrl: './principal-list.component.html',
  styleUrl: './principal-list.component.css',
})
export class PrincipalListComponent implements OnInit, OnDestroy {
  fetchAllPrincipalsSubscriber!: Subscription;
  principalsData!: principalData[];

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

  getSeverity(status: string) {
    switch (status) {
      case 'pending':
        return 'error';
      case 'approved':
        return 'success';
      default:
        return 'warning';
    }
  }

  redirectToSinglePrincipal(user_id: string) {
    this.router.navigate(['principals', user_id]);
  }

  ngOnDestroy(): void {
    this.fetchAllPrincipalsSubscriber?.unsubscribe();
  }
}
