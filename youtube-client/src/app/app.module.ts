import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { YoutubeComponent } from './components/svgs/youtube/youtube.component';
import { SearchComponent } from './components/search/search.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CardComponent } from './components/card/card.component';
import { ViewComponent } from './components/svgs/view/view.component';
import { LikeComponent } from './components/svgs/like/like.component';
import { DislikeComponent } from './components/svgs/dislike/dislike.component';
import { CommentComponent } from './components/svgs/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    YoutubeComponent,
    SearchComponent,
    LoginInfoComponent,
    SearchResultComponent,
    CardComponent,
    ViewComponent,
    LikeComponent,
    DislikeComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
