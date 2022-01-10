import { Component, Input } from '@angular/core';
import { Filter, IFilterData, Order } from 'src/types/filtering-criteria-types';
import { Post, YoutubeData } from 'src/types/youtube-data';
import * as Data from './data.json';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() searchString = '';

  @Input() filterData: IFilterData = { order: Order.Desc, filterType: Filter.Default };

  json: YoutubeData = Data;

  posts: Post[] = [];

  constructor() {
    this.posts = this.json.items;
  }
}
