import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { FilterDataByCriteriaPipe } from './pipes/filter-data-by-criteria.pipe';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { InfoComponent } from './components/info/info.component';
import { RoutesPath } from '../routes.enum';
import { AuthGuard } from '../auth/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { CommentComponent } from './components/svgs/comment/comment.component';
import { DislikeComponent } from './components/svgs/dislike/dislike.component';
import { LikeComponent } from './components/svgs/like/like.component';
import { ViewComponent } from './components/svgs/view/view.component';
import { PostsEsffects } from './ngrx/effects/posts.effects';
import { postReducer } from './ngrx/reducers/post.reducer';
import { CardImageComponent } from './components/card-image/card-image.component';
import { BorderStyleDirective } from './directives/border-style.directive';
import { FormatCountPipe } from './pipes/format-count.pipe';

@NgModule({
  declarations: [
    SearchResultPageComponent,
    CardComponent,
    ViewComponent,
    LikeComponent,
    DislikeComponent,
    CommentComponent,
    FilterDataByCriteriaPipe,
    FormatCountPipe,
    DetailedPageComponent,
    InfoItemComponent,
    InfoComponent,
    CustomCardComponent,
    CardImageComponent,
    BorderStyleDirective,
  ],
  exports: [SearchResultPageComponent, DetailedPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    SharedModule,
    EffectsModule.forFeature([PostsEsffects]),
    StoreModule.forFeature('posts', postReducer),
    RouterModule.forChild([
      { path: RoutesPath.Main, component: SearchResultPageComponent, canActivate: [AuthGuard] },
      { path: RoutesPath.Detail, component: DetailedPageComponent, canActivate: [AuthGuard] },
    ]),
  ],
})
export class YoutubeModule {}
