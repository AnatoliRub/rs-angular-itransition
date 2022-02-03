import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../auth/components/error/error.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [ErrorPageComponent, ErrorComponent],
  imports: [CommonModule],
})
export class TechnicalModule {}
