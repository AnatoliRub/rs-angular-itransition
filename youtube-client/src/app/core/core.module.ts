import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YoutubeComponent } from '../components/svgs/youtube/youtube.component';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginInfoComponent } from './components/header/login-info/login-info.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchSettingsComponent } from './components/header/search-settings/search-settings.component';
import { SearchComponent } from './components/header/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginInfoComponent,
    SearchComponent,
    SearchSettingsComponent,
    LogoComponent,
    YoutubeComponent,
    FilteringCriteriaComponent,
  ],
  exports: [HeaderComponent, FilteringCriteriaComponent],
  imports: [FontAwesomeModule, CommonModule, FormsModule],
})
export class CoreModule {}
