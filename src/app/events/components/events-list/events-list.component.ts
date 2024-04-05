import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventsService, eventData } from '../../services/event.service';
import { JWTService } from '../../../services/jwtservice.service';
import { SessionStorageService } from '../../../services/session-storage-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'school-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css',
})
export class EventsListComponent implements OnInit, OnDestroy {
  eventsData: eventData[];
  role: string = '';
  visible: boolean = false;
  fetchEventDataSubscriber: Subscription;

  constructor(
    private eventService: EventsService,
    private jwtService: JWTService,
    private storageService: SessionStorageService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.role = this.jwtService.getRoleFromToken(
      this.storageService.getFromSessionStorage('jwt')
    );
    this.fetchEvents();
  }

  fetchEvents() {
    this.fetchEventDataSubscriber = this.eventService.getEvents().subscribe({
      next: (responseData) => {
        this.eventsData = responseData.data.json;
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

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    this.fetchEvents();
  }

  ngOnDestroy(): void {
    this.fetchEventDataSubscriber?.unsubscribe();
  }
}
