import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { jwtDecode, JwtPayload } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService, private router: Router) {}

  // get token
  getToken(): string {
    return this.cookieService.get('User');
  }

  // get token decoded
  getTokenDecoded(): JwtPayload | null {
    try {
      const token = this.getToken();
      return jwtDecode<JwtPayload>(token);
    } catch (error) {
      return null;
    }
  }

  // get userId
  getUserId(): string {
    const decodedToken = this.getTokenDecoded();
    return decodedToken
      ? (decodedToken as any)[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ] || ''
      : '';
  }
  getUserName(): string {
    const decodedToken = this.getTokenDecoded();
    return decodedToken
      ? (decodedToken as any)[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ] || ''
      : '';
  }

  // get all user roles
  getUserRoles(): string[] {
    const decodedToken = this.getTokenDecoded();
    return decodedToken
      ? (decodedToken as any)[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ] || []
      : [];
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  // Check if the user has a specific role
  hasRole(role: string): boolean {
    const userRoles = this.getUserRoles();
    return userRoles.includes(role);
  }

  // Log out the user and clear the token
  logout() {
    this.cookieService.delete('User');
    this.router.navigate(['/login']);
  }
}
