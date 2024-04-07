import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { SuccessResponse } from '../../models/response.model';
import { CreateLeaveData, LeaveData } from '../leaves.model';
import { HandleErrorService } from '../../services/handle-error.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LeaveService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getLeaves(): Observable<SuccessResponse<LeaveData>> {
    return (
      this.http
        .get<SuccessResponse<LeaveData>>(`${environment.apiUrlV1}leaves`)
        // to handle error
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  applyForLeave(leaveData: CreateLeaveData): Observable<SuccessResponse<void>> {
    return (
      this.http
        .post<SuccessResponse<void>>(`${environment.apiUrlV1}leaves`, leaveData)
        // to handle error
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  updateLeaveStatus(leaveId: string): Observable<SuccessResponse<void>> {
    return (
      this.http
        .put<SuccessResponse<void>>(
          `${environment.apiUrlV1}leaves/${leaveId}`,
          {}
        )
        // to handle error
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }
}
