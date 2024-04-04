import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const EVENTS_ROUTES: Routes = [
  { path: '', component: EventsListComponent },
  { path: 'add', component: CreateEventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(EVENTS_ROUTES)],
  exports: [RouterModule],
})
export class EventRouting {}
