import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RoutesPath } from '../routes.enum';
import { ErrorComponent } from './components/error/error.component';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent, ErrorComponent, FormInputComponent],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: RoutesPath.Login,
        component: LoginPageComponent,
      },
      {
        path: RoutesPath.Registration,
        component: RegistrationPageComponent,
      },
    ]),
  ],
})
export class AuthModule {}
