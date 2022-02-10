import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, map, Observable, take } from 'rxjs';
import { Id, Post, YoutubeData } from 'src/types/youtube-data';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  #posts = new BehaviorSubject<Post<string>[]>([]);

  posts = this.#posts.asObservable();

  #detailPost = new BehaviorSubject<Post<string> | null>(null);

  detailPost = this.#detailPost.asObservable();

  mainRequestPart = 'https://youtube.googleapis.com/youtube/v3/';

  postsList$?: Observable<Post<string>[]>;

  constructor(private http: HttpClient) {}

  getPosts(searchPhrase: string) {
    return this.getPostsData(searchPhrase).pipe(
      map((res) =>
        Object.values(res.items)
          .map((el) => el.id.videoId)
          .join(','),
      ),
      concatMap((res) => this.getPostsDataWithStatistic(res)),
      take(1),
    );
  }

  getPostsData(searchPhrase: string) {
    let params = new HttpParams();
    params = params.append('part', 'snippet');
    params = params.append('type', 'video');
    params = params.append('q', searchPhrase);
    params = params.append('maxResults', '10');
    return this.http.get<YoutubeData<Post<Id>>>(`${this.mainRequestPart}search?`, { params });
  }

  getPostsDataWithStatistic(ids: string) {
    let params = new HttpParams();
    params = params.append('part', 'snippet,statistics');
    params = params.append('id', ids);
    return this.http
      .get<YoutubeData<Post<string>>>(`${this.mainRequestPart}videos?`, { params })
      .pipe(map((res) => Object.values(res.items)));
  }
}
