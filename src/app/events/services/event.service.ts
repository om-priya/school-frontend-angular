import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SuccessResponse } from '../../models/response.model';
import { HandleErrorService } from '../../services/handle-error.service';
import { createEventData, eventData } from '../events.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getEvents(): Observable<SuccessResponse<eventData>> {
    return (
      this.http
        .get<SuccessResponse<eventData>>(`${environment}events`)
        // pipe operator and using generic error to show the message
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  createEvent(
    eventDetails: createEventData
  ): Observable<SuccessResponse<void>> {
    return (
      this.http
        .post<SuccessResponse<void>>(`${environment}events`, eventDetails)
        // pipe operator and using generic error to show the message
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }
}
