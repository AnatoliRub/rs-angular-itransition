import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { RoutesPath } from 'src/app/routes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchString: string = '';

  constructor(private searchService: SearchServiceService, private router: Router) {}

  displayResults() {
    this.router.navigate([RoutesPath.Youtube, RoutesPath.Main]);
    this.searchService.setSearchWord(this.searchString);
  }
}
