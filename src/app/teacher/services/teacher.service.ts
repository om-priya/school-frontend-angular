import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { TeacherData, UpdatedTeacherData } from '../teacher.model';
import { SuccessResponse } from '../../models/response.model';
import { HandleErrorService } from '../../services/handle-error.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getAllTeachers(): Observable<SuccessResponse<TeacherData>> {
    return (
      this.http
        .get<SuccessResponse<TeacherData>>(`${environment.apiUrlV1}teachers`)
        // to handle error of http request
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  getSingleTeacher(user_id: string): Observable<SuccessResponse<TeacherData>> {
    return (
      this.http
        .get<SuccessResponse<TeacherData>>(
          `${environment.apiUrlV1}teachers/${user_id}`
        )
        // to handle error of http request
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  updateTeacher(
    updatedData: UpdatedTeacherData,
    user_id: string
  ): Observable<SuccessResponse<void>> {
    return (
      this.http
        .put<SuccessResponse<void>>(
          `${environment.apiUrlV1}teachers/${user_id}`,
          updatedData
        )
        // to handle error of http request
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  deleteTeacher(user_id: string): Observable<SuccessResponse<void>> {
    return (
      this.http
        .delete<SuccessResponse<void>>(
          `${environment.apiUrlV1}teachers/${user_id}`
        )
        // to handle error of http request
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  approveTeacher(user_id: string): Observable<SuccessResponse<void>> {
    return (
      this.http
        .put<SuccessResponse<void>>(
          `${environment.apiUrlV1}teachers/${user_id}/approve`,
          {}
        )
        // to handle error of http request
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }
}
