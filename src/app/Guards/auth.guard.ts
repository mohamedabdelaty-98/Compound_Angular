import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userRole = this.authService.GetUserRole(); // Assuming this returns the user's role

    if (userRole === 'admin') {
      return true; // User is an admin, allow access
    } else {
      this.router.navigate(['/home']); // Redirect to the home page for non-admin users
      return false; // Disallow access
    }
  }
}
