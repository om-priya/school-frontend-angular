import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventsService } from '../../services/event.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
})
export class CreateEventComponent implements OnDestroy {
  event_message: string = '';
  createEventSubscription!: Subscription;

  @Output() eventAdded = new EventEmitter<void>();
  constructor(
    private eventService: EventsService,
    private messageService: MessageService
  ) {}

  createEvent(formData: NgForm) {
    this.createEventSubscription = this.eventService
      .createEvent(formData.value)
      .subscribe({
        next: (responseData) => {
          this.eventAdded.emit();
          this.messageService.add({
            severity: 'success',
            summary: 'Event Created',
            detail: responseData.message,
          });
        },
        error: (error) => {
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
