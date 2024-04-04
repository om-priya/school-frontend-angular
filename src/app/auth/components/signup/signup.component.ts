import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  signUpUser(formData: NgForm){
    console.log(formData.value);
  }
}
