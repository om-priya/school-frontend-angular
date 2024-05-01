import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouteModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, AuthRouteModule, SharedModule, FormsModule],
})
export class AuthModule {}
