import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post, YoutubeData } from 'src/types/youtube-data';
import * as Data from '../pages/search-result-page/data.json';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  #json: YoutubeData = Data;

  #posts: Post[] = this.#json.items;

  #cardsInfo = new BehaviorSubject(this.#json.items);

  public cardsInfo = this.#cardsInfo.asObservable();

  getById(id: string) {
    return this.#posts.find(post => post.id === id);
  }
}
