import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionStorageService } from '../../../services/session-storage-service.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

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

  navigateToSignUp(): void {
    this.router.navigate(['/auth/signup']);
  }

  checkCredentials(formData: NgForm) {
    this.loginResponse = this.authService.login(formData.value).subscribe({
      next: (responseData) => {
        const jwt = responseData.data.json[0]['access_token'];

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Logged In Successfully',
        });
        this.sessionService.setSessionStorage('jwt', jwt);
        this.authService.successLogin.next();
        this.router.navigate(['/']);
      },
      error: (error) => {
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
