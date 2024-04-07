import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IssueData, IssueMessage } from '../issues.model';
import { SuccessResponse } from '../../models/response.model';
import { HandleErrorService } from '../../services/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getIssues(): Observable<SuccessResponse<IssueData>> {
    return (
      this.http
        .get<SuccessResponse<IssueData>>(`${environment.apiUrlV1}issues`)
        // pipe operator to handle error by showing toast
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }

  raiseIssues(issueInfo: IssueMessage): Observable<SuccessResponse<void>> {
    return (
      this.http
        .post<SuccessResponse<void>>(`${environment.apiUrlV1}issues`, issueInfo)
        // pipe operator to handle error by showing toast
        .pipe(
          catchError((error) => this.errorHandlerService.handleError(error))
        )
    );
  }
}
