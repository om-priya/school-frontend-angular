import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventsService } from '../../services/event.service';

@Component({
  selector: 'school-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
})
export class CreateEventComponent implements OnDestroy {
  event_message: string = '';
  createEventSubscription!: Subscription;

  @Output() eventAdded = new EventEmitter<void>();
  constructor(private eventService: EventsService) {}

  createEvent(formData: NgForm) {
    console.log(formData.value);
    this.createEventSubscription = this.eventService
      .createEvent(formData.value)
      .subscribe((responseData) => {
        console.log(responseData);
        this.eventAdded.emit();
      });
  }

  ngOnDestroy(): void {
    this.createEventSubscription?.unsubscribe();
  }
}
