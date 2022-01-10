import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Filter, IFilterData, Order } from 'src/types/filtering-criteria-types';

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

  @Output() filterData = new EventEmitter<IFilterData>();

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
    console.log(this.currentFilterState);
    switch (this.currentFilterState) {
      case Filter.Date: {
        this.setAndResetValues(Filter.Date);
        this.filterData.emit({
          order: this.order,
          filterType: Filter.Date,
        });
        break;
      }

      case Filter.View: {
        this.setAndResetValues(Filter.View);
        this.filterData.emit({
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
    this.filterData.emit({
      filterType: this.previousFilterState,
    });
  }

  filterResultsByWord(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filterWord = input.value;
    this.filterData.emit({
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
