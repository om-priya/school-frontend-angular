import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { Observable, catchError } from 'rxjs';
import { HandleErrorService } from '../../services/handle-error.service';

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
    private errorHandlerService: HandleErrorService
  ) {}

  getLeaves() {
    return this.http
      .get<SuccessResponse<leave_data>>('http://localhost:5000/api/v1/leaves')
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  applyForLeave(leaveData: leaveData) {
    return this.http
      .post<SuccessResponse<{}>>(
        `http://localhost:5000/api/v1/leaves`,
        leaveData
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  updateLeaveStatus(leaveId: string) {
    return this.http
      .put<SuccessResponse<{}>>(
        `http://localhost:5000/api/v1/leaves/${leaveId}`,
        {}
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
