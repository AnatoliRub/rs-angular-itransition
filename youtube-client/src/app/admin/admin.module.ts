import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RoutesPath } from '../routes.enum';
import { SharedModule } from '../shared/shared.module';
import { AdminGuard } from './guard/admin.guard';

@NgModule({
  declarations: [AdminPageComponent],
  providers: [AdminGuard],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: RoutesPath.Main, component: AdminPageComponent, canActivate: [AdminGuard] },
    ]),
  ],
})
export class AdminModule {}
