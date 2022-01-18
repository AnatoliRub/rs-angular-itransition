import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter, IFilterData } from 'src/types/filtering-criteria-types';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  #toggleSearchSettings: boolean = false;

  #isShowSettings = new BehaviorSubject(this.#toggleSearchSettings);

  public isShowSettings = this.#isShowSettings.asObservable();

  #searchWord = new BehaviorSubject('');

  public searchWord = this.#searchWord.asObservable();

  #filter = new BehaviorSubject<IFilterData>({ filterType: Filter.Default });

  public filter = this.#filter.asObservable();

  setFilter(value: IFilterData) {
    this.#filter.next(value);
  }

  toggleSettings() {
    this.#toggleSearchSettings = !this.#toggleSearchSettings;
    this.#isShowSettings.next(this.#toggleSearchSettings);
  }

  setSearchWord(value: string) {
    this.#searchWord.next(value);
  }
}
