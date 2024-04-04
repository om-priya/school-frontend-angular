import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../models/response.model';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { catchError } from 'rxjs';
import { HandleErrorService } from '../../services/handle-error.service';

export type feedbackData = {
  created_date: string;
  feedback_id: string;
  message: string;
};

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  constructor(
    private http: HttpClient,
    private storageService: SessionStorageService,
    private errorHandlerService: HandleErrorService
  ) {}

  getFeedbacks() {
    return this.http
      .get<SuccessResponse<feedbackData>>(
        'http://localhost:5000/api/v1/feedbacks'
      )
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
