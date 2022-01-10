import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchString: string = '';

  @Output() showResults = new EventEmitter<string>();

  displayResults() {
    this.showResults.emit(this.searchString);
  }
}
