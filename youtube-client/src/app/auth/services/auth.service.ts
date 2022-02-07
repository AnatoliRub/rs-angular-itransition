import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/admin/models/user.model';
import { UserData } from 'src/app/admin/types/user-data.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #isAuth = new BehaviorSubject(!!localStorage.getItem('user'));

  isAuth = this.#isAuth.asObservable();

  login(data: UserData) {
    this.#isAuth.next(true);
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUser(): User {
    const user = localStorage.getItem('user');
    if (user) {
      const userData: UserData = JSON.parse(user);
      return new User(userData);
    }
    return new User();
  }

  logout() {
    this.#isAuth.next(false);
    localStorage.removeItem('user');
  }
}
