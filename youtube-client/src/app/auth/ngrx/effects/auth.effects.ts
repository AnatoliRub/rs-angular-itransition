import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { RoutesPath } from 'src/app/routes.enum';
import { AuthActions } from '../actions/auth-action.types';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => localStorage.setItem('user', JSON.stringify(action.user))),
      );
    },
    { dispatch: false },
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigateByUrl(RoutesPath.Login);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(private readonly actions$: Actions, private readonly router: Router) {}
}
