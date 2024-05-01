import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IssuesRouting } from './issues-routing.module';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { CreateIssuesComponent } from './components/create-issues/create-issues.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IssuesListComponent, CreateIssuesComponent],
  imports: [CommonModule, IssuesRouting, FormsModule, SharedModule],
})
export class IssuesModule {}
