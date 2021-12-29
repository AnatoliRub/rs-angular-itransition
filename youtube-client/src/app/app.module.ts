import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { YoutubeComponent } from './components/svgs/youtube/youtube.component';
import { SearchComponent } from './components/search/search.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    YoutubeComponent,
    SearchComponent,
    LoginInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
