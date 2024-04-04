import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginSuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';

export type principalData = {
  email: string;
  gender: string;
  name: string;
  status: string;
  user_id: string;
};

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  constructor(
    private http: HttpClient,
    private storageService: SessionStorageService
  ) {}

  getAllPrincipals() {
    return this.http.get<LoginSuccessResponse<principalData>>(
      'http://localhost:5000/api/v1/principals',
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
