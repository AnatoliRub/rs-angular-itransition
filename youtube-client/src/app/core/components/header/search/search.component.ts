import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, filter, fromEvent, Subscription, tap } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { RoutesPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('search')
  search?: ElementRef;

  subscription$?: Subscription;

  searchString: string = '';

  constructor(
    private readonly searchService: SearchServiceService,
    private readonly router: Router,
  ) {}

  ngAfterViewInit(): void {
    if (this.search) {
      this.subscription$ = fromEvent<Event>(this.search.nativeElement, 'change')
        .pipe(
          filter((val) => (val?.target as HTMLInputElement).value.length > 3),
          debounceTime(400),
          tap((val) => {
            this.router.navigate([RoutesPath.Youtube]);
            this.searchService.setSearchWord((val?.target as HTMLInputElement).value);
          }),
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
}
