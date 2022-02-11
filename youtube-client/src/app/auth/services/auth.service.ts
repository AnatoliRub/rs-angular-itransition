import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoginData } from '../models/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #isAuth = new BehaviorSubject(!!localStorage.getItem('user'));

  isAuth = this.#isAuth.asObservable();

  login(data: ILoginData): void {
    this.#isAuth.next(true);
    localStorage.setItem('user', JSON.stringify(data));
  }

  logout(): void {
    this.#isAuth.next(false);
    localStorage.removeItem('user');
  }
}
