import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RoutesPath } from 'src/app/routes.enum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Promise<boolean> {
    return this.authService.isAuthenticated().then((isAuth) => {
      if (isAuth) {
        return true;
      }
      this.router.navigate([RoutesPath.Auth, RoutesPath.Login], { queryParams: { auth: false } });
      return false;
    });
  }
}
