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

  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionService: SessionStorageService,
    private jwtHandler: JWTService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn =
      this.sessionService.getFromSessionStorage('jwt') === '' ? false : true;

    this.logInSubscriber = this.authService.successLogin.subscribe(() => {
      this.isLoggedIn =
        this.sessionService.getFromSessionStorage('jwt') === '' ? false : true;
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

  ngOnDestroy(): void {
    this.logInSubscriber?.unsubscribe();
  }
}
