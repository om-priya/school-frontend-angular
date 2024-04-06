import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { SessionStorageService } from '../services/session-storage-service.service';
import { JWTService } from '../services/jwtservice.service';

export const onlyPrincipalGuard: CanActivateFn = (route, state) => {
  // Injecting Services in the function
  const storageService = inject(SessionStorageService);
  const jwtService = inject(JWTService);
  const router = inject(Router);

  const TOKEN = storageService.getFromSessionStorage('jwt');
  const ROLE = jwtService.getRoleFromToken(TOKEN);

  if (ROLE === 'principal') {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
