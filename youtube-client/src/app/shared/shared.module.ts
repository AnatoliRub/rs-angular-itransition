import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ErrorComponent, FormInputComponent, ButtonComponent],
  exports: [ErrorComponent, FormInputComponent, ButtonComponent, ReactiveFormsModule],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
