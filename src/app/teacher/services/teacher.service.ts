import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginSuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';

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
    private storageService: SessionStorageService
  ) {}

  getAllTeachers() {
    return this.http.get<LoginSuccessResponse<teacherData>>(
      'http://localhost:5000/api/v1/teachers',
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
