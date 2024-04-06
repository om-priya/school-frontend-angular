import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { SessionStorageService } from '../../../services/session-storage-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'school-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnDestroy {
  loginResponse: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionService: SessionStorageService,
    private messageService: MessageService
  ) {}

  // navigate to signUp page
  navigateToSignUp(): void {
    this.router.navigate(['/auth/signup']);
  }

  // Subscribing to the login service and setting session storage for the JWT
  checkCredentials(formData: NgForm): void {
    this.loginResponse = this.authService.login(formData.value).subscribe({
      next: (responseData) => {
        // accessing access_token from the response from backend
        const JWT = responseData.data.json[0]['access_token'];

        // showing toast in the frontend
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Logged In Successfully',
        });

        // after Math of successfull login
        this.sessionService.setSessionStorage('jwt', JWT);
        this.authService.successLogin.next();
        this.router.navigate(['/']);
      },
      error: (error) => {
        // showing toast in the frontend
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.loginResponse?.unsubscribe();
  }
}
