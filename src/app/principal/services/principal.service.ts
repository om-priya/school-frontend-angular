import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { catchError } from 'rxjs';
import { HandleErrorService } from '../../services/handle-error.service';

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
    private storageService: SessionStorageService,
    private errorHandlerService: HandleErrorService
  ) {}

  getAllPrincipals() {
    return this.http
      .get<SuccessResponse<principalData>>(
        'http://localhost:5000/api/v1/principals',
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.storageService.getFromSessionStorage(
              'jwt'
            )}`,
          }),
        }
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
  getSinglePrincipals(user_id: string) {
    return this.http
      .get<SuccessResponse<principalData>>(
        `http://localhost:5000/api/v1/principals/${user_id}`,
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.storageService.getFromSessionStorage(
              'jwt'
            )}`,
          }),
        }
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
