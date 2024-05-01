import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [],
  imports: [
    TableModule,
    TagModule,
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule
  ],
  exports: [
    TableModule,
    TagModule,
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule
  ],
})
export class SharedModule {}
