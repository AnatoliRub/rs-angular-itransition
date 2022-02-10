import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesPath } from 'src/app/routes.enum';
import { IFilterData } from 'src/types/filtering-criteria-types';
import { Post } from 'src/types/youtube-data';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { CustomCard } from 'src/app/admin/models/card.model';
import { selectGetAllCustomCardsSelector } from 'src/app/admin/ngrx/selectors/custom-card.selector';
import { selectSearchFilter } from 'src/app/core/ngrx/selectors/search.selectors';
import { CardService } from '../../services/card.service';
import { selectIsAdminRole } from '../../../auth/ngrx/selectors/auth.selectors';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent {
  faPlus = faPlus;

  posts$: Observable<Post<string>[]> = this.cardServise.posts;

  customCards$: Observable<CustomCard[]> = this.store.select(selectGetAllCustomCardsSelector);

  pathToAdminPage: RoutesPath[] = [RoutesPath.Admin];

  filter$: Observable<IFilterData> = this.store.select(selectSearchFilter);

  isAdmin$: Observable<boolean> = this.store.select(selectIsAdminRole);

  constructor(
    private readonly cardServise: CardService,
    private readonly router: Router,
    private readonly store: Store,
  ) {}

  goToAdminPage() {
    this.router.navigateByUrl(RoutesPath.Admin);
  }
}
