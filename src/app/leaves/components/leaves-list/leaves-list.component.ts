import { Component, OnDestroy, OnInit } from '@angular/core';
import { LeaveService, leave_data } from '../../services/leave.service';
import { Subscription } from 'rxjs';
import { JWTService } from '../../../services/jwtservice.service';
import { SessionStorageService } from '../../../services/session-storage-service.service';
import { MessageService } from 'primeng/api';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'school-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrl: './leaves-list.component.css',
})
export class LeavesListComponent implements OnInit, OnDestroy {
  leavesData: leave_data[];
  fetchLeaveSubscriber: Subscription;
  approveLeaveSubscriber: Subscription;
  cols: Column[];
  role: string;
  visible: boolean = false;

  constructor(
    private leaveService: LeaveService,
    private jwtService: JWTService,
    private storageService: SessionStorageService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchLeavesData();

    this.role = this.jwtService.getRoleFromToken(
      this.storageService.getFromSessionStorage('jwt')
    );
  }

  showDialog() {
    this.visible = true;
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
  fetchLeavesData() {
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

  approveLeave(leaveId: string) {
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

  closeDialog() {
    this.visible = false;
    this.fetchLeavesData();
  }

  ngOnDestroy(): void {
    this.fetchLeaveSubscriber?.unsubscribe();
    this.approveLeaveSubscriber?.unsubscribe();
  }
}
