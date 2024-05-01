import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PrincipalRouting } from './principal-routing.module';
import { PrincipalListComponent } from './components/principal-list/principal-list.component';
import { PrincipalDetailsComponent } from './components/principal-details/principal-details.component';
import { PrincipalDetailsEditComponent } from './components/principal-details-edit/principal-details-edit.component';

@NgModule({
  declarations: [
    PrincipalListComponent,
    PrincipalDetailsComponent,
    PrincipalDetailsEditComponent,
  ],
  imports: [CommonModule, PrincipalRouting, FormsModule, SharedModule],
})
export class PrincipalModule {}
