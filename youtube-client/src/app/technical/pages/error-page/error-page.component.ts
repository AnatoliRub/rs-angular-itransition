import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  adminError?: boolean;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((val) => {
      this.adminError = val['admin'];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
