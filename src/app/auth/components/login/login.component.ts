import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionStorageService } from '../../../services/session-storage-service.service';
import { JWTService } from '../../../services/jwtservice.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'school-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnDestroy {
  loginResponse: Subscription | undefined;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionService: SessionStorageService,
    private jwtHandler: JWTService
  ) {}

  navigateToSignUp(): void {
    this.router.navigate(['/auth/signup']);
  }

  checkCredentials(formData: NgForm) {
    console.log(formData.value);
    this.loginResponse = this.authService
      .login(formData.value)
      .subscribe((responseData) => {
        const jwt = responseData.data.json[0]['access_token'];

        this.sessionService.setSessionStorage('jwt', jwt);
        this.authService.successLogin.next();
        this.router.navigate(['/']);
      });
  }

  ngOnDestroy(): void {
    this.loginResponse?.unsubscribe();
  }
}
