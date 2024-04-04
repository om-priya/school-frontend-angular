import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';

const LEAVES_ROUTES: Routes = [{ path: '', component: LeavesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(LEAVES_ROUTES)],
  exports: [RouterModule],
})
export class LeaveRouting {}
