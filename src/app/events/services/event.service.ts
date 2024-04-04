import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginSuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';

export type eventData = {
  notice_id: string;
  notice_message: string;
};

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(
    private http: HttpClient,
    private storageService: SessionStorageService
  ) {}

  getEvents() {
    return this.http.get<LoginSuccessResponse<eventData>>(
      'http://localhost:5000/api/v1/events',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.storageService.getFromSessionStorage(
            'jwt'
          )}`,
        }),
      }
    );
  }
}
