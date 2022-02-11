import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter, IFilterData } from 'src/types/filtering-criteria-types';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  #toggleSearchSettings: boolean = false;

  #isShowSettings = new BehaviorSubject(this.#toggleSearchSettings);

  isShowSettings = this.#isShowSettings.asObservable();

  #searchWord = new BehaviorSubject('');

  searchWord = this.#searchWord.asObservable();

  #filter = new BehaviorSubject<IFilterData>({ filterType: Filter.Default });

  filter = this.#filter.asObservable();

  setFilter(value: IFilterData): void {
    this.#filter.next(value);
  }

  toggleSettings(): void {
    this.#toggleSearchSettings = !this.#toggleSearchSettings;
    this.#isShowSettings.next(this.#toggleSearchSettings);
  }

  setSearchWord(value: string): void {
    this.#searchWord.next(value);
  }
}
