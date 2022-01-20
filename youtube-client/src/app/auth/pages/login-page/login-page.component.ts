import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/routes.enum';
import { AuthService } from '../../services/auth.service';

enum Controls {
  Login = 'login',
  Password = 'password',
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  getLoginController = () => new FormControl('', [Validators.email, Validators.required]);

  getPasswordController = () => new FormControl('', [Validators.required, Validators.minLength(6)]);

  form: FormGroup = new FormGroup({
    login: this.getLoginController(),
    password: this.getPasswordController(),
  });

  constructor(private router: Router, private authService: AuthService) {}

  get login() {
    return this.form.get(Controls.Login);
  }

  get password() {
    return this.form.get(Controls.Password);
  }

  goToRegistration() {
    this.router.navigate([RoutesPath.Auth, RoutesPath.Registration]);
  }

  logout() {
    this.authService.logout();
  }

  submit() {
    this.authService.login({ loginData: this.login?.value, passwordData: this.password?.value });
    this.router.navigate([RoutesPath.Youtube]);
  }
}
