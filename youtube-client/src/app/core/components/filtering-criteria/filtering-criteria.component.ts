import { Component, Input, OnDestroy } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Filter, Order } from 'src/types/filtering-criteria-types';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export class FilteringCriteriaComponent implements OnDestroy {
  faSortDown = faSortDown;

  isReadOnly = 'readonly';

  order: Order = Order.Desc;

  previousFilterState: Filter = Filter.Default;

  currentFilterState = '';

  @Input() filterWord = '';

  constructor(private searchService: SearchServiceService) {}

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
        this.searchService.setFilter({
          order: this.order,
          filterType: Filter.Date,
        });
        break;
      }

      case Filter.View: {
        this.setAndResetValues(Filter.View);
        this.searchService.setFilter({
          order: this.order,
          filterType: Filter.View,
        });
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

  ngOnDestroy(): void {
    this.searchService.setFilter({
      filterType: this.previousFilterState,
    });
  }

  filterResultsByWord(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filterWord = input.value;
    this.searchService.setFilter({
      order: this.order,
      filterType: Filter.Word,
      filterWord: this.filterWord,
    });
  }

  changeOrder() {
    if (this.order === Order.Desc) {
      return ['rotate'];
    }

    return [];
  }
}
