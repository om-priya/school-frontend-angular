import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage-service.service';
import { JWTService } from '../services/jwtservice.service';
import { inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const storageService = inject(SessionStorageService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = storageService.getFromSessionStorage('jwt');

  if (token !== '') {
    return true;
  } else {
    authService.successLogin.next();
    router.navigate(['auth/login']);
    return false;
  }
};
