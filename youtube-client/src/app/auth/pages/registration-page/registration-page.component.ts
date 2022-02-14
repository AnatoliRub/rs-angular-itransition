import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/routes.enum';
import { Control } from 'src/app/shared/types/control.type';
import { onlyLetters } from '../../validators/onlyLetters.validator';

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

  getFirstNameController(): FormControl {
    return new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Zа-яёА-ЯЁ]*'),
      onlyLetters,
    ]);
  }

  getLastNameController(): FormControl {
    return new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Zа-яёА-ЯЁ]*'),
      onlyLetters,
    ]);
  }

  getEmailController(): FormControl {
    return new FormControl('', [Validators.email, Validators.required]);
  }

  getPasswordController(): FormControl {
    return new FormControl('', [Validators.required, Validators.minLength(6)]);
  }

  goToLogin(): void {
    this.router.navigate([RoutesPath.Auth, RoutesPath.Login]);
  }

  get firstName(): AbstractControl | null {
    return this.form.get(Control.FirstName);
  }

  get lastName(): AbstractControl | null {
    return this.form.get(Control.LastName);
  }

  get email(): AbstractControl | null {
    return this.form.get(Control.Email);
  }

  get password(): AbstractControl | null {
    return this.form.get(Control.Password);
  }
}
