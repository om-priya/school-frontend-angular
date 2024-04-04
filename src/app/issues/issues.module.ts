import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssuesRouting } from './issues-routing.module';
import { CreateIssuesComponent } from './components/create-issues/create-issues.component';

import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [IssuesListComponent, CreateIssuesComponent],
  imports: [CommonModule, IssuesRouting, TableModule],
})
export class IssuesModule {}
