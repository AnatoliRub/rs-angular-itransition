import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { RoutesPath } from 'src/app/routes.enum';
import { selectIsLoggedIn } from '../ngrx/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      tap((LoggedIn) => {
        if (!LoggedIn) {
          this.router.navigate([RoutesPath.Auth, RoutesPath.Login], {
            queryParams: { auth: false },
          });
        }
      }),
    );
  }
}
