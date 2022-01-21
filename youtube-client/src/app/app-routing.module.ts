import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RoutesPath } from './routes.enum';

const routes: Routes = [
  {
    path: RoutesPath.Youtube,
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: RoutesPath.Auth,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: RoutesPath.Main, redirectTo: RoutesPath.Youtube, pathMatch: 'full' },
  { path: RoutesPath.Error, component: ErrorPageComponent },
  { path: RoutesPath.Redirect, redirectTo: RoutesPath.Error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
