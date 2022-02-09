import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectIsAdminRole } from 'src/app/auth/ngrx/selectors/auth.selectors';
import { RoutesPath } from 'src/app/routes.enum';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAdminRole).pipe(
      tap((access) => {
        if (!access)
          this.router.navigate([RoutesPath.Error], {
            queryParams: { admin: false },
          });
      }),
    );
  }
}
