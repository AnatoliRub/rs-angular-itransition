import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() views: string = '';

  @Input() likes: string = '';

  @Input() dislikes: string = '';

  @Input() comments: string = '';

  @Input() image: string = '';

  @Input() title: string = '';
}
