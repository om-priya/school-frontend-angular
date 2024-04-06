import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError } from 'rxjs';

import { HandleErrorService } from '../../services/handle-error.service';
import { environment } from '../../../environments/environment';
import { SuccessResponse } from '../../models/response.model';
import { UserData } from '../auth.model';
import { AccessToken } from '../auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Subject used to changed some UI based on Successfull Login
  successLogin = new Subject<void>();

  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  // return an observable for signing up the user which can be subscribed in the component
  signUp(userData: UserData) {
    return (
      this.http
        .post<SuccessResponse<void>>(
          `${environment.apiUrlV1}signup`,
          userData,
          {
            // custom header for skipping the token Interceptor
            headers: new HttpHeaders({ 'X-Skip-Interceptor': '' }),
          }
        )
        // pipe operator and using generic error to show the message
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  // return observable for logging out from the application.
  logout() {
    return (
      this.http
        .post<SuccessResponse<void>>(`${environment.apiUrlV1}logout`, {})
        // pipe operator and using generic error to show the message
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  // return observable for login to the application
  login(userCredentials: {
    user_name: string;
    password: string;
  }): Observable<any> {
    return (
      this.http
        .post<SuccessResponse<AccessToken>>(
          `${environment.apiUrlV1}login`,
          userCredentials,
          {
            // custom header for skipping the token Interceptor
            headers: new HttpHeaders({ 'X-Skip-Interceptor': '' }),
          }
        )
        // pipe operator and using generic error to show the message
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }
}
