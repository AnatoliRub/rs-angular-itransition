import { Component } from '@angular/core';
import { Post, YoutubeData } from 'src/types/youtube-data';
import * as Data from './data.json';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  json: YoutubeData = Data;

  posts: Post[] = [];

  constructor() {
    this.posts = this.json.items;
  }
}
