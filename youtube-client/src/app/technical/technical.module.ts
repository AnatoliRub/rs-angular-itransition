import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ErrorComponent } from './components/svgs/error/error.component';
import { RoutesPath } from '../routes.enum';

@NgModule({
  declarations: [ErrorPageComponent, ErrorComponent],
  exports: [ErrorPageComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: RoutesPath.Main, component: ErrorPageComponent }]),
  ],
})
export class TechnicalModule {}
