import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'school-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  gender: string = 'm';
  email: string = '';
  phone: string = '';
  school_name: string = 'dav public school';
  password: string = '';
  role: string = 'teacher';
  experience: number = 0;
  fav_subject: string = '';

  signUpUserSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  signUpUser(formData: NgForm) {
    const newData = { ...formData.value };
    newData.experience = newData.experience.toString();
    console.log(formData.value);
    this.signUpUserSubscription = this.authService
      .signUp(newData)
      .subscribe((responseData) => {
        console.log(responseData);
        this.router.navigate(['auth/login']);
      });
  }
}
