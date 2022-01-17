import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  toggleSearchSettings: boolean = false;

  #isShowSettings = new BehaviorSubject(this.toggleSearchSettings);

  public isShowSettings = this.#isShowSettings.asObservable();

  #searchWord = new BehaviorSubject('');

  public searchWord = this.#searchWord.asObservable();

  private _filterWord = '';

  toggleSettings() {
    this.toggleSearchSettings = !this.toggleSearchSettings;
    this.#isShowSettings.next(this.toggleSearchSettings);
  }

  setSearchWord(value: string) {
    this.#searchWord.next(value);
  }
}
