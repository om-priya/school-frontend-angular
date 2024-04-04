import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { catchError } from 'rxjs';
import { HandleErrorService } from '../../services/handle-error.service';

export type issueData = {
  issue_id: string;
  issue_message: string;
};

export type issueMessage = {
  issue_message: string;
};

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getIssues() {
    return this.http
      .get<SuccessResponse<issueData>>('http://localhost:5000/api/v1/issues')
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  raiseIssues(issueInfo: issueMessage) {
    return this.http
      .post<SuccessResponse<void>>(
        'http://localhost:5000/api/v1/issues',
        issueInfo
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
