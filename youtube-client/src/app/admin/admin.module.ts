import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RoutesPath } from '../routes.enum';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: RoutesPath.Main, component: AdminPageComponent }]),
  ],
})
export class AdminModule {}
