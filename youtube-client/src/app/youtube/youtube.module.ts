import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CommentComponent } from '../components/svgs/comment/comment.component';
import { DislikeComponent } from '../components/svgs/dislike/dislike.component';
import { LikeComponent } from '../components/svgs/like/like.component';
import { ViewComponent } from '../components/svgs/view/view.component';
import { CardComponent } from './components/search-result/card/card.component';
import { MaterialModule } from '../material/material.module';
import { FilterDataByCriteriaPipe } from './pipes/filter-data-by-criteria.pipe';
import { SearchByWordPipe } from './pipes/search-by-word.pipe';

@NgModule({
  declarations: [
    SearchResultComponent,
    CardComponent,
    ViewComponent,
    LikeComponent,
    DislikeComponent,
    CommentComponent,
    SearchByWordPipe,
    FilterDataByCriteriaPipe
  ],
  exports: [SearchResultComponent],
  imports: [CommonModule, MaterialModule],
})
export class YoutubeModule {}
