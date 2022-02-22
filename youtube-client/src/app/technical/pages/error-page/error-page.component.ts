import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, takeUntil } from 'rxjs';
import { Disposable } from 'src/app/shared/utils/disposable.class';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent extends Disposable {
  adminError?: Observable<boolean> = this.route.queryParams.pipe(
    takeUntil(this.disposed$),
    pluck('admin'),
  );

  constructor(private readonly route: ActivatedRoute) {
    super();
  }
}
