import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { SessionStorageService } from '../services/session-storage-service.service';
import { AuthService } from '../auth/services/auth.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  // Injecting Services in the Function
  const storageService = inject(SessionStorageService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const TOKEN = storageService.getFromSessionStorage('jwt');

  if (TOKEN !== '') {
    return true;
  } else {
    authService.successLogin.next();
    router.navigate(['auth/login']);
    return false;
  }
};
