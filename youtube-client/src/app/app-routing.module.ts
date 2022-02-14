import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { RoutesPath } from './routes.enum';
import { TechnicalModule } from './technical/technical.module';
import { YoutubeModule } from './youtube/youtube.module';

const routes: Routes = [
  {
    path: RoutesPath.Youtube,
    loadChildren: (): Promise<YoutubeModule> =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: RoutesPath.Auth,
    loadChildren: (): Promise<AuthModule> => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: RoutesPath.Admin,
    loadChildren: (): Promise<AdminModule> =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: RoutesPath.Main, redirectTo: RoutesPath.Youtube, pathMatch: 'full' },
  {
    path: RoutesPath.Error,
    loadChildren: (): Promise<TechnicalModule> =>
      import('./technical/technical.module').then((m) => m.TechnicalModule),
  },
  { path: RoutesPath.Redirect, redirectTo: RoutesPath.Error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
