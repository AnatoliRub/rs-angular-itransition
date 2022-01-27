import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { RoutesPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchString: string = '';

  constructor(
    private readonly searchService: SearchServiceService,
    private readonly router: Router,
  ) {}

  displayResults() {
    this.router.navigate([RoutesPath.Youtube]);
    this.searchService.setSearchWord(this.searchString);
  }
}
