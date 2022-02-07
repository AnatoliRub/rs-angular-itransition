import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RoutesPath } from 'src/app/routes.enum';
import { AdminService } from '../services/admin.service';

@Injectable()
export class AdminGuard implements CanActivate {
  #isAdmin$ = this.adminService.isAdmin;

  constructor(private readonly adminService: AdminService, private readonly router: Router) {}

  canActivate(): Observable<boolean> {
    return this.#isAdmin$.pipe(
      tap((access) => {
        if (!access)
          this.router.navigate([RoutesPath.Error], {
            queryParams: { admin: false },
          });
      }),
    );
  }
}
