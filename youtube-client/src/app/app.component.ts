import { Component } from '@angular/core';
import { Filter, IFilterData, Order } from 'src/types/filtering-criteria-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isShowSettings: boolean = false;

  isShowContent: boolean = false;

  searchString: string = '';

  filterData: IFilterData = { order: Order.desc, filterType: Filter.default };

  showSettings() {
    this.isShowSettings = !this.isShowSettings;
  }

  showResults(value: string) {
    if (!this.isShowContent) {
      this.isShowContent = !this.isShowContent;
    }

    this.searchString = value;
  }

  getFilterData(value: IFilterData) {
    this.filterData = { ...value };
  }
}
