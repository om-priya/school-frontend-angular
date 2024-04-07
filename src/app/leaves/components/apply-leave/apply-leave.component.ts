import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'school-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css',
})
export class ApplyLeaveComponent implements OnDestroy {
  date: Date;
  applyLeaveSubscription: Subscription;

  @Output() onSuccessApplied = new EventEmitter<void>();

  constructor(
    private leaveService: LeaveService,
    private messageService: MessageService
  ) {}

  applyForLeave(formData: NgForm) {
    // formatting data for the backend.
    let formattedDate = this.date.toLocaleDateString('en-GB');
    let newData = { ...formData.value };
    newData.leave_date = formattedDate.replaceAll('/', '-');
    newData.no_of_days = newData.no_of_days.toString();

    this.leaveService.applyForLeave(newData).subscribe({
      next: (responseData) => {
        // showing the toast on success and emitting the event to update parent UI
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: responseData.message,
        });
        this.onSuccessApplied.emit();
      },
      error: (error) => {
        // error toast
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.applyLeaveSubscription?.unsubscribe();
  }
}
