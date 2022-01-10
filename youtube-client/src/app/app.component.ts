import { Component } from '@angular/core';
import { IFilterData } from './components/filtering-criteria/filtering-criteria.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isShowSettings: boolean = false;

  isShowContent: boolean = false;

  searchString: string = '';

  filterData: IFilterData = { order: '', filterType: '' };

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
    console.log(this.filterData);
  }
}
