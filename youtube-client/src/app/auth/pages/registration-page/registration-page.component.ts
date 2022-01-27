import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/routes.enum';
import { Control } from '../../types/control.type';
import { OnlyLetters } from '../../validators/onlyLetters.validator';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  form: FormGroup = new FormGroup({
    firstName: this.getFirstNameController(),
    lastName: this.getLastNameController(),
    email: this.getEmailController(),
    password: this.getPasswordController(),
  });

  constructor(private readonly router: Router) {}

  getFirstNameController() {
    return new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Zа-яёА-ЯЁ]*'),
      OnlyLetters,
    ]);
  }

  getLastNameController() {
    return new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Zа-яёА-ЯЁ]*'),
      OnlyLetters,
    ]);
  }

  getEmailController() {
    return new FormControl('', [Validators.email, Validators.required]);
  }

  getPasswordController() {
    return new FormControl('', [Validators.required, Validators.minLength(6)]);
  }

  goToLogin() {
    this.router.navigate([RoutesPath.Auth, RoutesPath.Login]);
  }

  get firstName() {
    return this.form.get(Control.FirstName);
  }

  get lastName() {
    return this.form.get(Control.LastName);
  }

  get email() {
    return this.form.get(Control.Email);
  }

  get password() {
    return this.form.get(Control.Password);
  }
}
