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
}
