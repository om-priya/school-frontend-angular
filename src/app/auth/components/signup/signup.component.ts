import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'school-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnDestroy {
  name: string = '';
  gender: string = 'm';
  email: string = '';
  phone: string = '';
  school_name: string = 'dav public school';
  password: string = '';
  role: string = 'teacher';
  experience: number = 0;
  fav_subject: string = '';

  signUpUserSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  navigateToLogin() {
    this.router.navigate(['auth/login']);
  }

  // Subscribing to the signing up of the user
  signUpUser(formData: NgForm) {
    // formatting data for the backend API
    const newData = { ...formData.value };
    newData.experience = newData.experience.toString();

    //Upon Successfull signUp navigate to /login
    this.signUpUserSubscription = this.authService.signUp(newData).subscribe({
      next: (responseData) => {
        this.router.navigate(['auth/login']);
        // showing toast in the frontend
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: responseData.message,
        });
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
    this.signUpUserSubscription?.unsubscribe();
  }
}
