import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { LeaveRouting } from './leaves-routing.module';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LeavesListComponent, ApplyLeaveComponent],
  imports: [CommonModule, LeaveRouting, TableModule, TagModule, ButtonModule],
})
export class LeavesModule {}
