import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  #isAdmin = new BehaviorSubject(false);

  isAdmin = this.#isAdmin.asObservable();

  constructor(private readonly authService: AuthService) {}

  checkAdmin(user: User) {
    this.#isAdmin.next(user.isAdminRole());
  }
}
