import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { PrincipalService } from '../../services/principal.service';
import { PrincipalData } from '../../principal.model';

@Component({
  selector: 'school-principal-details',
  templateUrl: './principal-details.component.html',
  styleUrl: './principal-details.component.css',
})
export class PrincipalDetailsComponent implements OnInit, OnDestroy {
  fetchSingleRouteSubscriber: Subscription;
  deletePrincipalSubscriber: Subscription;
  approvePrincipalSubscriber: Subscription;
  principalData: PrincipalData;
  visible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private principalService: PrincipalService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchPrincipal();
  }

  showDialog(): void {
    this.visible = true;
  }

  closeDialog(): void {
    this.visible = false;
    this.fetchPrincipal();
  }

  // fetching principals data
  fetchPrincipal(): void {
    const principal_id = this.route.snapshot.params['id'];
    this.fetchSingleRouteSubscriber = this.principalService
      .getSinglePrincipals(principal_id)
      .subscribe({
        next: (responseData) => {
          this.principalData = responseData.data.json[0];
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

  // deleteing principal
  deletePrincipal(principal_id: string): void {
    this.deletePrincipalSubscriber = this.principalService
      .deletePrincipal(principal_id)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          this.router.navigate(['principals']);
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

  // approving principal
  approvePrincipal(principal_id: string): void {
    this.approvePrincipalSubscriber = this.principalService
      .approvePrincipal(principal_id)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          this.router.navigate(['principals']);
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
    this.fetchSingleRouteSubscriber?.unsubscribe();
    this.approvePrincipalSubscriber?.unsubscribe();
    this.deletePrincipalSubscriber?.unsubscribe();
  }
}
