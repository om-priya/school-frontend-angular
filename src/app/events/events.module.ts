import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventRouting } from './events-routing.module';

import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [EventsListComponent, CreateEventComponent],
  imports: [
    CommonModule,
    EventRouting,
    TableModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
    DialogModule,
  ],
})
export class EventsModule {}
