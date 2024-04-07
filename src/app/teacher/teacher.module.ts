import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

import { TeacherRouting } from './teacher-routing.module';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherDetailsEditComponent } from './components/teacher-details-edit/teacher-details-edit.component';


@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherDetailsComponent,
    TeacherDetailsEditComponent,
  ],
  imports: [
    CommonModule,
    TeacherRouting,
    TableModule,
    TagModule,
    ButtonModule,
    CardModule,
    DialogModule,
    FormsModule
  ],
})
export class TeacherModule {}
