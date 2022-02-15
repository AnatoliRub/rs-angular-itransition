import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserData } from 'src/app/admin/types/user-data.type';
import { RoutesPath } from 'src/app/routes.enum';
import { login, logout } from '../../ngrx/actions/auth.actions';
import { selectIsLoggedIn } from '../../ngrx/selectors/auth.selectors';
import { Control } from '../../../shared/types/control.type';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  isAuthenticated$ = this.store.select(selectIsLoggedIn);

  form: FormGroup = new FormGroup({
    login: this.getLoginController(),
    password: this.getPasswordController(),
  });

  constructor(private readonly router: Router, private readonly store: Store) {}

  goToRegistration(): void {
    this.router.navigate([RoutesPath.Auth, RoutesPath.Registration]);
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  submit(): void {
    const user: UserData = {
      loginData: this.login?.value,
      passwordData: this.password?.value,
    };
    this.store.dispatch(login({ user }));
    this.router.navigate([RoutesPath.Main]);
  }

  getLoginController(): FormControl {
    return new FormControl('', [Validators.email, Validators.required]);
  }

  getPasswordController(): FormControl {
    return new FormControl('', [Validators.required, Validators.minLength(6)]);
  }

  get login(): AbstractControl | null {
    return this.form.get(Control.Login);
  }

  get password(): AbstractControl | null {
    return this.form.get(Control.Password);
  }
}
