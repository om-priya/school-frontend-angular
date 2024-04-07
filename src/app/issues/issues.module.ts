import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { IssuesRouting } from './issues-routing.module';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { CreateIssuesComponent } from './components/create-issues/create-issues.component';


@NgModule({
  declarations: [IssuesListComponent, CreateIssuesComponent],
  imports: [
    CommonModule,
    IssuesRouting,
    TableModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
  ],
})
export class IssuesModule {}
