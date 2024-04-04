import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { JWTService } from '../../services/jwtservice.service';
import { AuthService } from '../../auth/services/auth.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'school-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  items: MenuItem[] | undefined;
  isLoggedIn: boolean | undefined = false;
  logInSubscriber: Subscription | undefined;
  role!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: SessionStorageService,
    private jwtService: JWTService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn =
      this.storageService.getFromSessionStorage('jwt') === '' ? false : true;

    const token: string = this.storageService.getFromSessionStorage('jwt');
    if (token !== '') {
      this.role = this.jwtService.getRoleFromToken(token);
    }

    this.logInSubscriber = this.authService.successLogin.subscribe(() => {
      this.isLoggedIn =
        this.storageService.getFromSessionStorage('jwt') === '' ? false : true;

      if (this.isLoggedIn === true) {
        const token: string = this.storageService.getFromSessionStorage('jwt');
        this.role = this.jwtService.getRoleFromToken(token);
      }
    });

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

  logoutMe() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['auth/login']);
  }

  ngOnDestroy(): void {
    this.logInSubscriber?.unsubscribe();
  }
}
