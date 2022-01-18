import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DetailedPageComponent } from './youtube/pages/detailed-page/detailed-page.component';
import { SearchResultPageComponent } from './youtube/pages/search-result-page/search-result-page.component';

const routes: Routes = [
  { path: '', component: SearchResultPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'detail/:id', component: DetailedPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
