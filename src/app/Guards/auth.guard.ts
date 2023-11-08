import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../account/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userRoles = this.authService.getUserRoles();

    if (userRoles.includes('Admin')) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
