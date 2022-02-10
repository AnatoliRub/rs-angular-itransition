import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchActions } from 'src/app/core/ngrx/actions/search-action.types';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent {
  constructor(private readonly store: Store) {}

  toggleSettings() {
    this.store.dispatch(searchActions.toggleSearchAction());
  }
}
