import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [MatButtonModule, MatTooltipModule],
  exports: [MatButtonModule, MatTooltipModule],
})
export class MaterialModule {}
