import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/routes.enum';
import { AuthService } from '../../services/auth.service';
import { Control } from '../../../shared/types/control.type';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  isAuthenticated$ = this.authService.isAuth;

  form: FormGroup = new FormGroup({
    login: this.getLoginController(),
    password: this.getPasswordController(),
  });

  constructor(private readonly router: Router, private readonly authService: AuthService) {}

  getLoginController() {
    return new FormControl('', [Validators.email, Validators.required]);
  }

  getPasswordController() {
    return new FormControl('', [Validators.required, Validators.minLength(6)]);
  }

  goToRegistration() {
    this.router.navigate([RoutesPath.Auth, RoutesPath.Registration]);
  }

  logout() {
    this.authService.logout();
  }

  submit() {
    this.authService.login({ loginData: this.login?.value, passwordData: this.password?.value });
    this.router.navigate([RoutesPath.Main]);
  }

  get login() {
    return this.form.get(Control.Login);
  }

  get password() {
    return this.form.get(Control.Password);
  }
}
