import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesPath } from 'src/app/routes';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((isAuth) => {
      if (isAuth) {
        return true;
      }
      this.router.navigate([RoutesPath.Auth, RoutesPath.Login], { queryParams: { auth: false } });
      return false;
    });
  }
}
