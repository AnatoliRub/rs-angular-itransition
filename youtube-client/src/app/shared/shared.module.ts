import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ErrorComponent, FormInputComponent, ButtonComponent, TitleComponent],
  exports: [
    ErrorComponent,
    FormInputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    TitleComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
