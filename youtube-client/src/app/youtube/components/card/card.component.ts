import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutesPath } from 'src/app/routes.enum';
import { Post } from 'src/types/youtube-data';
import { PostsActions } from '../../ngrx/actions/posts-action.types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() post?: Post<string>;

  constructor(private readonly router: Router, private readonly store: Store) {}

  goToPage(): void {
    this.router.navigate([RoutesPath.Youtube, RoutesPath.DetailPart, this.post?.id]);
    this.store.dispatch(PostsActions.loadPost({ id: this.post?.id || '' }));
  }

  setCardBorderColor(): string[] {
    const dateNow = new Date();
    const datePublish = new Date(this.post!.snippet.publishedAt);
    const difference = Math.floor((dateNow.getTime() - datePublish.getTime()) / 86400000);

    if (difference < 7) {
      return ['blue'];
    }

    if (difference < 30) {
      return ['green'];
    }

    if (difference < 180) {
      return ['yellow'];
    }

    return ['red'];
  }
}
