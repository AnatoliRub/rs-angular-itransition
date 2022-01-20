import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { CommentComponent } from '../components/svgs/comment/comment.component';
import { DislikeComponent } from '../components/svgs/dislike/dislike.component';
import { LikeComponent } from '../components/svgs/like/like.component';
import { ViewComponent } from '../components/svgs/view/view.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { FilterDataByCriteriaPipe } from './pipes/filter-data-by-criteria.pipe';
import { SearchByWordPipe } from './pipes/search-by-word.pipe';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    SearchResultPageComponent,
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
  exports: [SearchResultPageComponent, DetailedPageComponent],
  imports: [CommonModule, MaterialModule, FontAwesomeModule],
})
export class YoutubeModule {}
