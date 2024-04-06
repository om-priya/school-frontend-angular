import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { SessionStorageService } from '../../services/session-storage-service.service';
import { JWTService } from '../../services/jwtservice.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'school-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  isLoggedIn: boolean = false;
  logInSubscriber: Subscription;
  role: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: SessionStorageService,
    private jwtService: JWTService
  ) {}

  ngOnInit(): void {
    // fetching token from session storage and setting value for rendering
    const token: string = this.storageService.getFromSessionStorage('jwt');
    if (token !== '') {
      this.isLoggedIn = true;
      this.role = this.jwtService.getRoleFromToken(token);
    }

    // loginInSubscriber from the auth service to change the UI Whenever some tries to logIn
    this.logInSubscriber = this.authService.successLogin.subscribe(() => {
      const token: string = this.storageService.getFromSessionStorage('jwt');
      if (token !== '') {
        this.isLoggedIn = true;
        this.role = this.jwtService.getRoleFromToken(token);
      } else {
        this.isLoggedIn = false;
      }
    });

    // items list for rendering navbar of PrimeNg
    this.items = [
      {
        label: '<b>Home<b>',
        routerLink: [''],
      },
      {
        label: '<b>About<b>',
        routerLink: ['/about'],
      },
    ];
  }

  redirectToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  // clearing the session storage and setting the values to initial value
  logoutMe() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['auth/login']);
  }

  ngOnDestroy(): void {
    this.logInSubscriber?.unsubscribe();
  }
}
