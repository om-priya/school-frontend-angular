import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

import { ErrorResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  constructor(private router: Router) {}

  // HANDLE ERROR FUNCTION FOR THE PIPE IN HTTP CALLS
  handleError(errResponse: HttpErrorResponse) {
    const errorData: ErrorResponse = errResponse.error;
    switch (errorData.err_status_code) {
      case 400:
        return throwError(errorData.err_message);
      case 401:
        this.router.navigate(['auth/login']);
        return throwError(errorData.err_message);
      case 403:
        this.router.navigate(['']);
        return throwError(errorData.err_message);
      case 404:
        return throwError(errorData.err_message);
      case 409:
        return throwError('Provide Unique Data');
      case 422:
        return throwError('Regex Validation Failed');
      case 500:
        return throwError(errorData.err_message);
      default:
        return throwError('Crazy things Happening');
    }
  }
}
