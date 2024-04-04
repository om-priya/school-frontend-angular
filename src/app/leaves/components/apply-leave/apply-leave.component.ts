import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'school-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css',
})
export class ApplyLeaveComponent implements OnDestroy {
  date!: Date;
  applyLeaveSubscription!: Subscription;

  @Output() onSuccessApplied = new EventEmitter<void>();

  constructor(private leaveService: LeaveService) {}

  applyForLeave(formData: NgForm) {
    const formattedDate = this.date.toLocaleDateString('en-GB');
    const newData = { ...formData.value };
    newData.leave_date = formattedDate.replaceAll('/','-');
    newData.no_of_days = newData.no_of_days.toString();
    console.log(newData);

    this.leaveService.applyForLeave(newData).subscribe((responseData) => {
      console.log(responseData);
      this.onSuccessApplied.emit();
    });
  }

  ngOnDestroy(): void {
    this.applyLeaveSubscription?.unsubscribe();
  }
}
