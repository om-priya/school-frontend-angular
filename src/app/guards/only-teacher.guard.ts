import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage-service.service';
import { JWTService } from '../services/jwtservice.service';

export const onlyTeacherGuard: CanActivateFn = (route, state) => {
  const storageService = inject(SessionStorageService);
  const jwtService = inject(JWTService);
  const router = inject(Router);

  const token = storageService.getFromSessionStorage('jwt');
  const role = jwtService.getRoleFromToken(token);

  if (role === 'teacher') {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};