import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventRouting } from './events-routing.module';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [EventsListComponent, CreateEventComponent],
  imports: [CommonModule, EventRouting, FormsModule, SharedModule],
})
export class EventsModule {}
