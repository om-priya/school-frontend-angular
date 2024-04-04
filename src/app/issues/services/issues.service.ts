import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginSuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';

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
    private storageService: SessionStorageService
  ) {}

  getIssues() {
    return this.http.get<LoginSuccessResponse<issueData>>(
      'http://localhost:5000/api/v1/issues',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.storageService.getFromSessionStorage(
            'jwt'
          )}`,
        }),
      }
    );
  }

  raiseIssues(issueInfo: issueMessage) {
    return this.http.post<LoginSuccessResponse<void>>(
      'http://localhost:5000/api/v1/issues',
      issueInfo,
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
