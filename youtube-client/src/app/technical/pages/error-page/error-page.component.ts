import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Disposable } from 'src/app/shared/utils/disposable.class';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent extends Disposable implements OnInit {
  adminError?: boolean;

  constructor(private readonly route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.disposed$)).subscribe((val) => {
      this.adminError = val['admin'];
    });
  }
}
