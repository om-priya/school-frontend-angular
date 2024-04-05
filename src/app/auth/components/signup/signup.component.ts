import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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

  signUpUser(formData: NgForm) {
    const newData = { ...formData.value };
    newData.experience = newData.experience.toString();

    this.signUpUserSubscription = this.authService.signUp(newData).subscribe({
      next: (responseData) => {
        this.router.navigate(['auth/login']);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: responseData.message,
        });
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
    this.signUpUserSubscription?.unsubscribe();
  }
}
