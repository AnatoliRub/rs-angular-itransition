import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/routes';
import { Post } from 'src/types/youtube-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() post?: Post;

  constructor(private router: Router) {}

  goToPage() {
    this.router.navigate([RoutesPath.Youtube, RoutesPath.DetailPart, this.post?.id]);
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
