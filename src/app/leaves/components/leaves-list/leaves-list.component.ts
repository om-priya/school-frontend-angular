import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { LeaveData } from '../../leaves.model';
import { LeaveService } from '../../services/leave.service';
import { JWTService } from '../../../services/jwtservice.service';
import { SessionStorageService } from '../../../services/session-storage-service.service';

@Component({
  selector: 'school-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrl: './leaves-list.component.css',
})
export class LeavesListComponent implements OnInit, OnDestroy {
  leavesData: LeaveData[];
  fetchLeaveSubscriber: Subscription;
  approveLeaveSubscriber: Subscription;
  role: string;
  visible: boolean = false;

  constructor(
    private leaveService: LeaveService,
    private jwtService: JWTService,
    private storageService: SessionStorageService,
    private messageService: MessageService
  ) {}

  // fetching data from the API
  ngOnInit(): void {
    this.fetchLeavesData();

    this.role = this.jwtService.getRoleFromToken(
      this.storageService.getFromSessionStorage('jwt')
    );
  }

  // showing overlay for the form
  showDialog(): void {
    this.visible = true;
  }

  // showing the status style
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

  // fetching the data by subscribing
  fetchLeavesData(): void {
    this.fetchLeaveSubscriber = this.leaveService.getLeaves().subscribe({
      next: (responseData) => {
        this.leavesData = responseData.data.json;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
        });
        this.leavesData = [];
      },
    });
  }

  // approving leave of the user
  approveLeave(leaveId: string): void {
    this.approveLeaveSubscriber = this.leaveService
      .updateLeaveStatus(leaveId)
      .subscribe({
        next: (responseData) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: responseData.message,
          });
          this.fetchLeavesData();
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

  // closing the overlay for thr form
  closeDialog(): void {
    this.visible = false;
    this.fetchLeavesData();
  }

  ngOnDestroy(): void {
    this.fetchLeaveSubscriber?.unsubscribe();
    this.approveLeaveSubscriber?.unsubscribe();
  }
}
