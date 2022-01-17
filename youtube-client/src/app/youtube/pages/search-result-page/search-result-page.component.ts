import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { Filter, IFilterData, Order } from 'src/types/filtering-criteria-types';
import { Post, YoutubeData } from 'src/types/youtube-data';
import * as Data from './data.json';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent {
  @Input() filterData: IFilterData = { order: Order.Desc, filterType: Filter.Default };

  json: YoutubeData = Data;

  posts: Post[] = [];

  searchString: Observable<string> = this.serchService.searchWord;

  constructor(private serchService: SearchServiceService) {
    this.posts = this.json.items;
  }
}
