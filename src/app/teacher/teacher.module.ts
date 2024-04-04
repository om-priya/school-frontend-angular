import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRouting } from './teacher-routing.module';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherDetailsEditComponent } from './components/teacher-details-edit/teacher-details-edit.component';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherDetailsComponent,
    TeacherDetailsEditComponent,
  ],
  imports: [CommonModule, TeacherRouting, TableModule, TagModule, ButtonModule],
})
export class TeacherModule {}
