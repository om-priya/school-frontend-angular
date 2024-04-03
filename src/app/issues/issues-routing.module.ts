import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { CreateIssuesComponent } from './components/create-issues/create-issues.component';

const ISSUES_ROUTING: Routes = [
  { path: '', component: IssuesListComponent },
  { path: 'create', component: CreateIssuesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ISSUES_ROUTING)],
  exports: [RouterModule],
})
export class IssuesRouting {}
