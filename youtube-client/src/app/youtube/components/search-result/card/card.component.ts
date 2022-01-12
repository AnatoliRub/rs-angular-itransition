import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from 'src/types/youtube-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() post: Post | undefined;

  constructor() {
    this.post = undefined;
  }

  setCardBorderColor() {
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
