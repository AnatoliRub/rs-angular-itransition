import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isShow: Observable<boolean>;

  constructor(private searchService: SearchServiceService) {
    this.isShow = this.searchService.isShowSettings;
  }
}
