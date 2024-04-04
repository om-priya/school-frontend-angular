import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { isLoggedInGuard } from '../guards/is-logged-in.guard';

const LEAVES_ROUTES: Routes = [
  { path: '', canActivate: [isLoggedInGuard], component: LeavesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(LEAVES_ROUTES)],
  exports: [RouterModule],
})
export class LeaveRouting {}
