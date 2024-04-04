import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage-service.service';
import { JWTService } from '../services/jwtservice.service';
import { inject } from '@angular/core';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const storageService = inject(SessionStorageService);
  const jwtService = inject(JWTService);
  const router = inject(Router);

  const token = storageService.getFromSessionStorage('jwt');

  if (token !== '') {
    return true;
  } else {
    router.navigate(['auth/login']);
    return false;
  }
};
