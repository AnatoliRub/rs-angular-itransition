import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { YoutubeComponent } from './components/svgs/youtube/youtube.component';
import { SearchComponent } from './components/header/search/search.component';
import { LoginInfoComponent } from './components/header/login-info/login-info.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CardComponent } from './components/search-result/card/card.component';
import { ViewComponent } from './components/svgs/view/view.component';
import { LikeComponent } from './components/svgs/like/like.component';
import { DislikeComponent } from './components/svgs/dislike/dislike.component';
import { CommentComponent } from './components/svgs/comment/comment.component';
import { MaterialModule } from './material/material.module';
import { SearchSettingsComponent } from './components/header/search-settings/search-settings.component';

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
    SearchSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
