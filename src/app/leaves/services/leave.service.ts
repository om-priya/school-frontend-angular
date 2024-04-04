import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginSuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { Observable } from 'rxjs';

export type leave_data = {
  leave_date: string;
  leave_id: string;
  no_of_days: number;
  status: string;
  username: string;
};
export type leaveData = {
  leave_date: string;
  no_of_day: string;
};
@Injectable({ providedIn: 'root' })
export class LeaveService {
  constructor(
    private http: HttpClient,
    private storageService: SessionStorageService
  ) {}

  getLeaves() {
    return this.http.get<LoginSuccessResponse<leave_data>>(
      'http://localhost:5000/api/v1/leaves',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.storageService.getFromSessionStorage(
            'jwt'
          )}`,
        }),
      }
    );
  }

  applyForLeave(leaveData: leaveData) {
    return this.http.post<LoginSuccessResponse<{}>>(
      `http://localhost:5000/api/v1/leaves`,
      leaveData,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.storageService.getFromSessionStorage(
            'jwt'
          )}`,
        }),
      }
    );
  }

  updateLeaveStatus(leaveId: string) {
    return this.http.put<LoginSuccessResponse<{}>>(
      `http://localhost:5000/api/v1/leaves/${leaveId}`,
      {},
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
