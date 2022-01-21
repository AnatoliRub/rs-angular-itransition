import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { IFilterData } from 'src/types/filtering-criteria-types';
import { Post } from 'src/types/youtube-data';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent {
  posts$: Observable<Post[]> = this.cardServise.cardsInfo;

  searchString$: Observable<string> = this.searchService.searchWord;

  filter$: Observable<IFilterData> = this.searchService.filter;

  constructor(private searchService: SearchServiceService, private cardServise: CardService) {}
}
