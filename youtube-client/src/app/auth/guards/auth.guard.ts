import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RoutesPath } from 'src/app/routes.enum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  #isAuthenticated$ = this.authService.isAuth;

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(): Observable<boolean> {
    return this.#isAuthenticated$.pipe(
      tap((access) => {
        if (!access)
          this.router.navigate([RoutesPath.Auth, RoutesPath.Login], {
            queryParams: { auth: false },
          });
      }),
    );
  }
}
