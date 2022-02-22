import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RoutesPath } from '../routes.enum';
import { SharedModule } from '../shared/shared.module';
import { authReducer } from './ngrx/reducers/auth.reducer';
import { AuthEffects } from './ngrx/effects/auth.effects';

@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
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
