import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RoutesPath } from '../routes.enum';
import { SharedModule } from '../shared/shared.module';
import { AdminGuard } from './guard/admin.guard';
import { customCardReducer } from './ngrx/reducers/custom-card.reducer';

@NgModule({
  declarations: [AdminPageComponent],
  providers: [AdminGuard],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('customCard', customCardReducer),
    RouterModule.forChild([
      { path: RoutesPath.Main, component: AdminPageComponent, canActivate: [AdminGuard] },
    ]),
  ],
})
export class AdminModule {}
