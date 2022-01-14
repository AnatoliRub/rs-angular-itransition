import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup | null = null;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Zа-яёА-ЯЁ]*'),
        ],
/*         [this.nameValidator()], */
      ),
      lastName: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Zа-яёА-ЯЁ]*'),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

/*   nameValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl,
    ):
      | Promise<{ [key: string]: boolean } | null>
      | Observable<{ [key: string]: boolean } | null> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (control.value === 'Gleb') {
            resolve({ nameValidator: true });
          }
          if (control.value === 'Anatoly') {
            resolve({ uniqName: true });
          }
          resolve(null);
        }, 2000);
      });
    };
  } */

  get firstName() {
    return this.form?.get('firstName');
  }

  get lastName() {
    return this.form?.get('lastName');
  }

  get email() {
    return this.form?.get('email');
  }

  get password() {
    return this.form?.get('password');
  }

  submit() {
    if (this.form?.valid) {
      console.log(this.form);
      const formData = { ...this.form.value };
      console.log(formData);
    }
  }
}
