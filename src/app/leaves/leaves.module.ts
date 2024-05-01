import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaveRouting } from './leaves-routing.module';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LeavesListComponent, ApplyLeaveComponent],
  imports: [CommonModule, LeaveRouting, SharedModule, FormsModule],
})
export class LeavesModule {}
