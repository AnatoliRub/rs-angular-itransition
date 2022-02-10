import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/admin/models/card.model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() card?: CustomCard;

  constructor() {
    // eslint-disable-next-line no-console
    console.log(this.card);
  }
}
