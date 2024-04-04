import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { catchError } from 'rxjs';
import { HandleErrorService } from '../../services/handle-error.service';

export type eventData = {
  notice_id: string;
  notice_message: string;
};

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(
    private http: HttpClient,
    private storageService: SessionStorageService,
    private errorHandlerService: HandleErrorService
  ) {}

  getEvents() {
    return this.http
      .get<SuccessResponse<eventData>>('http://localhost:5000/api/v1/events', {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.storageService.getFromSessionStorage(
            'jwt'
          )}`,
        }),
      })
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  createEvent(eventDetails: { event_message: string }) {
    return this.http
      .post<SuccessResponse<void>>(
        'http://localhost:5000/api/v1/events',
        eventDetails,
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.storageService.getFromSessionStorage(
              'jwt'
            )}`,
          }),
        }
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
