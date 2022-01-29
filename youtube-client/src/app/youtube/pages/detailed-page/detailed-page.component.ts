import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { concatMap, Observable, Subscription } from 'rxjs';
import { RoutesPath } from 'src/app/routes.enum';
import { Post } from 'src/types/youtube-data';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit, OnDestroy {
  faChevronLeft = faChevronLeft;

  subscription?: Subscription;

  post?: Post<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cardService: CardService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        concatMap((val): Observable<Post<string>[]> => {
          return this.cardService.getPostsDataWithStatistic(val['id']);
        }),
      )
      .subscribe((postList): void => {
        const [firstPost] = postList;
        this.post = firstPost;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  goBack() {
    this.router.navigate([RoutesPath.Youtube]);
  }
}
