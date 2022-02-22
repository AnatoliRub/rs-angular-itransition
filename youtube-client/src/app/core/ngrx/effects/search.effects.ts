import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { debounceTime, filter, map } from 'rxjs';
import { PostsActions } from 'src/app/youtube/ngrx/actions/posts-action.types';
import { searchActions } from '../actions/search-action.types';

@Injectable()
export class SearchEsffects {
  search$ = createEffect(() => {
    return this.actions$.pipe(
      debounceTime(1000),
      ofType(searchActions.setSearchWord),
      filter((action) => action.searchWord.length > 3),
      map((action) => PostsActions.loadAllPosts({ searchPhrase: action.searchWord })),
    );
  });

  constructor(
    private actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
  ) {}
}
