import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PrincipalService,
  principalData,
} from '../../services/principal.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-principal-details',
  templateUrl: './principal-details.component.html',
  styleUrl: './principal-details.component.css',
})
export class PrincipalDetailsComponent implements OnInit, OnDestroy {
  fetchSingleRouteSubscriber!: Subscription;
  deletePrincipalSubscriber!: Subscription;
  approvePrincipalSubscriber!: Subscription;
  principalData!: principalData;
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

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    this.fetchPrincipal();
  }

  fetchPrincipal() {
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
  deletePrincipal(principal_id: string) {
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

  approvePrincipal(principal_id: string) {
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
