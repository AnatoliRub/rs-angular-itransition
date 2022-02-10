import { Component, Input } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Filter, Order } from 'src/types/filtering-criteria-types';
import { searchActions } from '../../ngrx/actions/search-action.types';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export class FilteringCriteriaComponent {
  faSortDown = faSortDown;

  isReadOnly = 'readonly';

  order: Order = Order.Desc;

  previousFilterState: Filter = Filter.Default;

  currentFilterState = '';

  @Input() filterWord = '';

  constructor(private readonly store: Store) {}

  toggleOrder() {
    if (this.previousFilterState === this.currentFilterState) {
      this.order = this.order === Order.Desc ? Order.Asc : Order.Desc;
    } else {
      this.order = Order.Desc;
    }
  }

  setAndResetValues(filter: Filter) {
    this.filterWord = '';
    this.isReadOnly = 'readonly';
    this.toggleOrder();
    this.previousFilterState = filter;
  }

  setFilter(event: MouseEvent) {
    this.currentFilterState = (event.target as HTMLLabelElement).htmlFor;

    switch (this.currentFilterState) {
      case Filter.Date: {
        this.setAndResetValues(Filter.Date);
        const filter = {
          order: this.order,
          filterType: Filter.Date,
        };
        this.store.dispatch(
          searchActions.setSearchFilter({
            filter,
          }),
        );
        break;
      }

      case Filter.View: {
        this.setAndResetValues(Filter.View);
        const filter = {
          order: this.order,
          filterType: Filter.View,
        };
        this.store.dispatch(
          searchActions.setSearchFilter({
            filter,
          }),
        );
        break;
      }

      case Filter.Word: {
        this.isReadOnly = '';
        break;
      }

      default:
        break;
    }
  }

  filterResultsByWord(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filterWord = input.value;
    const filter = {
      order: this.order,
      filterType: Filter.Word,
      filterWord: this.filterWord,
    };
    this.store.dispatch(
      searchActions.setSearchFilter({
        filter,
      }),
    );
  }

  changeOrder() {
    if (this.order === Order.Desc) {
      return ['rotate'];
    }

    return [];
  }
}
