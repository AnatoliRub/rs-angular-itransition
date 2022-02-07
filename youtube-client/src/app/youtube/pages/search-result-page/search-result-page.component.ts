import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { RoutesPath } from 'src/app/routes.enum';
import { IFilterData } from 'src/types/filtering-criteria-types';
import { Post } from 'src/types/youtube-data';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/admin/services/admin.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent {
  faPlus = faPlus;

  posts$: Observable<Post<string>[]> = this.cardServise.posts;

  pathToAdminPage: RoutesPath[] = [RoutesPath.Admin];

  filter$: Observable<IFilterData> = this.searchService.filter;

  isAdmin$: Observable<boolean> = this.adminService.isAdmin;

  constructor(
    private readonly searchService: SearchServiceService,
    private readonly cardServise: CardService,
    private readonly router: Router,
    private readonly adminService: AdminService,
    private readonly authService: AuthService,
  ) {
    this.adminService.checkAdmin(this.authService.getUser());
  }

  goToAdminPage() {
    this.router.navigateByUrl(RoutesPath.Admin);
  }
}
