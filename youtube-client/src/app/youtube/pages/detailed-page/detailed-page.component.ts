import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { RoutesPath } from 'src/app/routes.enum';
import { Post } from 'src/types/youtube-data';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  post?: Post;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cardService: CardService,
    private readonly router: Router,
  ) {}

  goBack() {
    this.router.navigate([RoutesPath.Youtube]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.cardService.getById(params['id']);
    });
  }
}
