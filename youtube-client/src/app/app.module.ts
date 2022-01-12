import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CardComponent } from './components/search-result/card/card.component';
import { ViewComponent } from './components/svgs/view/view.component';
import { LikeComponent } from './components/svgs/like/like.component';
import { DislikeComponent } from './components/svgs/dislike/dislike.component';
import { CommentComponent } from './components/svgs/comment/comment.component';
import { MaterialModule } from './material/material.module';
import { SearchByWordPipe } from './pipes/search-by-word.pipe';
import { FilterDataByCriteriaPipe } from './pipes/filter-data-by-criteria.pipe';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    CardComponent,
    ViewComponent,
    LikeComponent,
    DislikeComponent,
    CommentComponent,
    SearchByWordPipe,
    FilterDataByCriteriaPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
