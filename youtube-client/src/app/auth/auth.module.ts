import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RoutesPath } from '../routes.enum';
import { SharedModule } from '../shared/shared.module';
import { authReducer } from './ngrx/reducers/auth.reducer';

@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer),
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
