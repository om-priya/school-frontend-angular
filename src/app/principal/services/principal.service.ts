import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { SuccessResponse } from '../../models/response.model';
import { HandleErrorService } from '../../services/handle-error.service';
import { PrincipalData, UpdatedPrincipalData } from '../principal.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getAllPrincipals(): Observable<SuccessResponse<PrincipalData>> {
    return (
      this.http
        .get<SuccessResponse<PrincipalData>>(
          `${environment.apiUrlV1}principals`
        )
        // to handle http error handling
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  getSinglePrincipals(
    user_id: string
  ): Observable<SuccessResponse<PrincipalData>> {
    return (
      this.http
        .get<SuccessResponse<PrincipalData>>(
          `${environment.apiUrlV1}principals/${user_id}`
        )
        // to handle http error handling
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  deletePrincipal(user_id: string): Observable<SuccessResponse<void>> {
    return (
      this.http
        .delete<SuccessResponse<void>>(
          `${environment.apiUrlV1}principals/${user_id}`
        )
        // to handle http error handling
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  updatePrincipal(
    updatedData: UpdatedPrincipalData,
    user_id: string
  ): Observable<SuccessResponse<void>> {
    return (
      this.http
        .put<SuccessResponse<void>>(
          `${environment.apiUrlV1}principals/${user_id}`,
          updatedData
        )
        // to handle http error handling
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }
  approvePrincipal(user_id: string): Observable<SuccessResponse<void>> {
    return (
      this.http
        .put<SuccessResponse<void>>(
          `${environment.apiUrlV1}principals/${user_id}/approve`,
          {}
        )
        // to handle http error handling
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }
}
