import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchActions } from 'src/app/core/ngrx/actions/search-action.types';
import { RoutesPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private readonly router: Router, private readonly store: Store) {}

  onInput(event: Event) {
    const searchWord = (event.target as HTMLInputElement).value;
    this.store.dispatch(searchActions.setSearchWord({ searchWord }));
    this.router.navigate([RoutesPath.Youtube]);
  }
}
