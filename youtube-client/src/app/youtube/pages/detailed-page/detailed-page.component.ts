import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { RoutesPath } from 'src/app/routes.enum';
import { selectPostSelector } from '../../ngrx/selectors/posts.selectors';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent {
  faChevronLeft = faChevronLeft;

  post? = this.store.select(selectPostSelector);

  constructor(private readonly router: Router, private readonly store: Store) {}

  goBack(): void {
    this.router.navigate([RoutesPath.Youtube]);
  }
}
