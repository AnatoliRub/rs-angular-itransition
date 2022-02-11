import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, filter, Subscription } from 'rxjs';
import { searchActions } from 'src/app/core/ngrx/actions/search-action.types';
import { selectSearchWord } from 'src/app/core/ngrx/selectors/search.selectors';
import { RoutesPath } from 'src/app/routes.enum';
import { PostsActions } from 'src/app/youtube/ngrx/actions/posts-action.types';
import { CardService } from 'src/app/youtube/services/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  subscription$: Subscription;

  constructor(
    private readonly cardService: CardService,
    private readonly router: Router,
    private readonly store: Store,
  ) {
    this.subscription$ = this.store
      .select(selectSearchWord)
      .pipe(
        debounceTime(2000),
        filter((val) => val.length > 3),
      )
      .subscribe(() => {
        this.store.dispatch(PostsActions.loadAllPosts());
        this.router.navigate([RoutesPath.Youtube]);
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  onInput(event: Event) {
    const searchWord = (event.target as HTMLInputElement).value;
    this.store.dispatch(searchActions.setSearchWord({ searchWord }));
  }
}
