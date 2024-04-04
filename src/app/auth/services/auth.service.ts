import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError } from 'rxjs';
import { SuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { HandleErrorService } from '../../services/handle-error.service';

type access_token = { access_token: string };

export interface UserData {
  name: string;
  gender: string;
  email: string;
  phone: string;
  school_name: string;
  password: string;
  role: string;
  experience: string;
  fav_subject?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  //   isLoggedIn: boolean | undefined;
  //   role: string | undefined;
  //   user_id: string | undefined;

  successLogin = new Subject<void>();
  successLogout = new Subject<void>();

  constructor(
    private http: HttpClient,
    private storageService: SessionStorageService,
    private errorHandlerService: HandleErrorService
  ) {}

  signUp(userData: UserData) {
    return this.http
      .post<SuccessResponse<void>>(
        'http://localhost:5000/api/v1/signup',
        userData
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  logout() {
    return this.http
      .post<SuccessResponse<void>>(
        'http://localhost:5000/api/v1/logout',
        {},
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

  login(userCredentials: {
    user_name: string;
    password: string;
  }): Observable<any> {
    return this.http
      .post<SuccessResponse<access_token>>(
        'http://localhost:5000/api/v1/login',
        userCredentials
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
