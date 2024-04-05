import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { catchError } from 'rxjs';
import { HandleErrorService } from '../../services/handle-error.service';

export type teacherData = {
  email: string;
  gender: string;
  name: string;
  status: string;
  user_id: string;
};
export type updatedTeacherData = {
  email: string;
  gender: string;
  name: string;
  phone: string;
};
@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getAllTeachers() {
    return this.http
      .get<SuccessResponse<teacherData>>(
        'http://localhost:5000/api/v1/teachers'
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  getSingleTeacher(user_id: string) {
    return this.http
      .get<SuccessResponse<teacherData>>(
        `http://localhost:5000/api/v1/teachers/${user_id}`
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  updateTeacher(updatedData: updatedTeacherData, user_id: string) {
    return this.http
      .put<SuccessResponse<void>>(
        `http://localhost:5000/api/v1/teachers/${user_id}`,
        updatedData
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  deleteTeacher(user_id: string) {
    return this.http
      .delete<SuccessResponse<void>>(
        `http://localhost:5000/api/v1/teachers/${user_id}`
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  approveTeacher(user_id: string) {
    return this.http
      .put<SuccessResponse<void>>(
        `http://localhost:5000/api/v1/teachers/${user_id}/approve`,
        {}
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
