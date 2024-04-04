import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventRouting } from './events-routing.module';

import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [EventsListComponent, CreateEventComponent],
  imports: [CommonModule, EventRouting, TableModule],
})
export class EventsModule {}
