import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  constructor() {}

  getTokenClaims(token: string) {
    const decoded = jwtDecode(token);
    return decoded;
  }

  getRoleFromToken(token: string): string | undefined {
    const decoded: any = this.getTokenClaims(token);
    const claims: { user_id: string; role: string } = decoded?.sub;
    return claims.role;
  }

  getUserIdFromToken(token: string): string | undefined {
    const decoded: any = this.getTokenClaims(token);
    const claims: { user_id: string; role: string } = decoded?.sub;
    return claims.user_id;
  }
}
