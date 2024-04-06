import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { SessionStorageService } from '../services/session-storage-service.service';
import { JWTService } from '../services/jwtservice.service';

export const onlyPrincipalTeacherGuard: CanActivateFn = (route, state) => {
  // Injecting services in the guard
  const storageService = inject(SessionStorageService);
  const jwtService = inject(JWTService);
  const router = inject(Router);

  const TOKEN = storageService.getFromSessionStorage('jwt');
  const ROLE = jwtService.getRoleFromToken(TOKEN);

  if (ROLE !== 'superadmin') {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
