import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRouting } from './principal-routing.module';
import { PrincipalListComponent } from './components/principal-list/principal-list.component';
import { PrincipalDetailsComponent } from './components/principal-details/principal-details.component';
import { PrincipalDetailsEditComponent } from './components/principal-details-edit/principal-details-edit.component';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    PrincipalListComponent,
    PrincipalDetailsComponent,
    PrincipalDetailsEditComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRouting,
    TableModule,
    TagModule,
    ButtonModule,
    CardModule,
    FormsModule,
    DialogModule
  ],
})
export class PrincipalModule {}
