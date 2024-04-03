import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { LeaveRouting } from './leaves-routing.module';

@NgModule({
  declarations: [LeavesListComponent, ApplyLeaveComponent],
  imports: [CommonModule, LeaveRouting],
})
export class LeavesModule {}
