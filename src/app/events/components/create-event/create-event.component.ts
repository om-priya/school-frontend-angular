import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { EventsService } from '../../services/event.service';

@Component({
  selector: 'school-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
})
export class CreateEventComponent implements OnDestroy {
  event_message: string = '';
  createEventSubscription: Subscription;

  // to notify parent(events-list) that data has been added
  @Output() eventAdded = new EventEmitter<void>();

  constructor(
    private eventService: EventsService,
    private messageService: MessageService
  ) {}

  // subscribing to createEvent of event service
  createEvent(formData: NgForm) {
    this.createEventSubscription = this.eventService
      .createEvent(formData.value)
      .subscribe({
        next: (responseData) => {
          // emiting events to update parent UI
          this.eventAdded.emit();
          // showing toast in the frontend
          this.messageService.add({
            severity: 'success',
            summary: 'Event Created',
            detail: responseData.message,
          });
        },
        error: (error) => {
          // showing toast in the frontend
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          });
        },
      });
  }

  ngOnDestroy(): void {
    this.createEventSubscription?.unsubscribe();
  }
}
