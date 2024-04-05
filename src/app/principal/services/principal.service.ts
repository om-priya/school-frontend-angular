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
export type updatedPrincipalData = {
  email: string;
  gender: string;
  name: string;
  phone: string;
};

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getAllPrincipals() {
    return this.http
      .get<SuccessResponse<principalData>>(
        'http://localhost:5000/api/v1/principals'
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  getSinglePrincipals(user_id: string) {
    return this.http
      .get<SuccessResponse<principalData>>(
        `http://localhost:5000/api/v1/principals/${user_id}`
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  deletePrincipal(user_id: string) {
    return this.http
      .delete<SuccessResponse<void>>(
        `http://localhost:5000/api/v1/principals/${user_id}`
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  updatePrincipal(updatedData: updatedPrincipalData, user_id: string) {
    return this.http
      .put<SuccessResponse<void>>(
        `http://localhost:5000/api/v1/principals/${user_id}`,
        updatedData
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
  approvePrincipal(user_id: string) {
    return this.http
      .put<SuccessResponse<void>>(
        `http://localhost:5000/api/v1/principals/${user_id}/approve`,
        {}
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
