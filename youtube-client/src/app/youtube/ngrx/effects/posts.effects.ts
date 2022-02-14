import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { CardService } from '../../services/card.service';
import { PostsActions } from '../actions/posts-action.types';

@Injectable()
export class PostsEsffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.loadAllPosts),
      concatMap((action) => this.cardService.getPosts(action.searchPhrase)),
      map((posts) => PostsActions.allPostsloaded({ posts })),
    );
  });

  loadPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.loadPost),
      concatMap((action) => this.cardService.getPostsDataWithStatistic(action.id)),
      map((posts) => {
        const [post] = posts;
        return PostsActions.Postloaded({ post });
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private readonly cardService: CardService,
    private readonly store: Store,
  ) {}
}
