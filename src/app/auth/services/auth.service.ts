import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginSuccessResponse } from '../../models/response.model';

type access_token = { access_token: string };

@Injectable({ providedIn: 'root' })
export class AuthService {
  //   isLoggedIn: boolean | undefined;
  //   role: string | undefined;
  //   user_id: string | undefined;

  successLogin = new Subject<void>();

  constructor(private http: HttpClient) {}

  signUp() {}

  login(userCredentials: {
    user_name: string;
    password: string;
  }): Observable<any> {
    return this.http.post<LoginSuccessResponse<access_token>>(
      'http://localhost:5000/api/v1/login',
      userCredentials
    );
  }
}
