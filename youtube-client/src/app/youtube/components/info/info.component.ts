import { Component, Input } from '@angular/core';
import { Statistic } from 'src/types/youtube-data';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() statistics?: Statistic;
}
