import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from './routes.enum';

const routes: Routes = [
  {
    path: RoutesPath.Youtube,
    loadChildren: (): Promise<any> =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: RoutesPath.Auth,
    loadChildren: (): Promise<any> => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: RoutesPath.Admin,
    loadChildren: (): Promise<any> => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: RoutesPath.Main, redirectTo: RoutesPath.Youtube, pathMatch: 'full' },
  {
    path: RoutesPath.Error,
    loadChildren: (): Promise<any> =>
      import('./technical/technical.module').then((m) => m.TechnicalModule),
  },
  { path: RoutesPath.Redirect, redirectTo: RoutesPath.Error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
