import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter, Subscription } from 'rxjs';
import { RoutesPath } from 'src/app/routes.enum';
import { CardService } from 'src/app/youtube/services/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  #search$ = new BehaviorSubject('');

  subscription$?: Subscription;

  constructor(private readonly cardService: CardService, private readonly router: Router) {}

  ngOnInit(): void {
    this.subscription$ = this.#search$
      .pipe(
        debounceTime(400),
        filter((val) => val.length > 3),
      )
      .subscribe((val) => {
        this.cardService.getPosts(val);
        this.router.navigate([RoutesPath.Youtube]);
      });
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.#search$.next(val);
  }
}
