import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventsService, eventData } from '../../services/event.service';

@Component({
  selector: 'school-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css',
})
export class EventsListComponent implements OnInit, OnDestroy {
  eventsData!: eventData[];
  fetchEventDataSubscriber!: Subscription;

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.fetchEventDataSubscriber = this.eventService
      .getEvents()
      .subscribe((responseData) => {
        this.eventsData = responseData.data.json;
      });
  }

  ngOnDestroy(): void {
    this.fetchEventDataSubscriber?.unsubscribe();
  }
}
