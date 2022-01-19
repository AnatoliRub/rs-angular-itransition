import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/routes';
import { ILoginData } from '../models/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #isAuth = !!localStorage.getItem('user');

  constructor(private router: Router) {}

  login(data: ILoginData) {
    this.#isAuth = true;
    localStorage.setItem('user', JSON.stringify(data));
    this.router.navigate([RoutesPath.Youtube, RoutesPath.Main]);
  }

  logout() {
    this.#isAuth = false;
    localStorage.removeItem('user');
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.#isAuth);
      }, 0);
    });
  }
}
