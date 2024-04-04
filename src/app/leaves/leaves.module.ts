import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { LeaveRouting } from './leaves-routing.module';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [LeavesListComponent, ApplyLeaveComponent],
  imports: [
    CommonModule,
    LeaveRouting,
    TableModule,
    TagModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    FormsModule,
    DialogModule,
  ],
})
export class LeavesModule {}
