import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CreateFeedback, FeedbackData } from '../feedback.model';
import { SuccessResponse } from '../../models/response.model';
import { HandleErrorService } from '../../services/handle-error.service';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  constructor(
    private http: HttpClient,
    private errorHandlerService: HandleErrorService
  ) {}

  getFeedbacks(): Observable<SuccessResponse<FeedbackData>> {
    return this.http
      .get<SuccessResponse<FeedbackData>>(
        `${environment.apiUrlV1}feedbacks`
      )
      // pipe operator and using generic error to show the message
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  giveFeedback(
    feedbackData: CreateFeedback,
    user_id: string
  ): Observable<SuccessResponse<void>> {
    return this.http
      .post<SuccessResponse<void>>(
        `${environment.apiUrlV1}feedbacks/${user_id}`,
        feedbackData
      )
      // pipe operator and using generic error to show the message
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }
}
