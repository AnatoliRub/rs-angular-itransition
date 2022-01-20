import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { RoutesPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent {
  faUserCircle = faUserCircle;

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate([RoutesPath.Auth, RoutesPath.Login]);
  }
}
