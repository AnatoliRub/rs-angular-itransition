import { Component } from '@angular/core';
import { SearchServiceService } from 'src/app/core/services/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchString: string = '';

  constructor(private searchService: SearchServiceService) {}

  displayResults() {
    this.searchService.setSearchWord(this.searchString);
  }
}
