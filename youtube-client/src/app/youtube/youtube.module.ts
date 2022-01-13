import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CommentComponent } from '../components/svgs/comment/comment.component';
import { DislikeComponent } from '../components/svgs/dislike/dislike.component';
import { LikeComponent } from '../components/svgs/like/like.component';
import { ViewComponent } from '../components/svgs/view/view.component';
import { CardComponent } from './components/search-result/card/card.component';
import { MaterialModule } from '../material/material.module';
import { FilterDataByCriteriaPipe } from './pipes/filter-data-by-criteria.pipe';
import { SearchByWordPipe } from './pipes/search-by-word.pipe';
import { DetailedPageComponent } from './components/detailed-page/detailed-page.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    SearchResultComponent,
    CardComponent,
    ViewComponent,
    LikeComponent,
    DislikeComponent,
    CommentComponent,
    SearchByWordPipe,
    FilterDataByCriteriaPipe,
    DetailedPageComponent,
    InfoItemComponent,
    InfoComponent,
  ],
  exports: [SearchResultComponent, DetailedPageComponent],
  imports: [CommonModule, MaterialModule, FontAwesomeModule],
})
export class YoutubeModule {}
