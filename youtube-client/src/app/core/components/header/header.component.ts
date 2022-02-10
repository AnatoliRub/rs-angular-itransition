import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSearchIsShow } from '../../ngrx/selectors/search.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isVisible$: Observable<boolean> = this.store.select(selectSearchIsShow);

  constructor(private readonly store: Store) {}
}
