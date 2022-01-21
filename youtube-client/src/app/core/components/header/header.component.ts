import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isVisible$: Observable<boolean> = this.searchService.isShowSettings;

  constructor(private searchService: SearchServiceService) {}
}
