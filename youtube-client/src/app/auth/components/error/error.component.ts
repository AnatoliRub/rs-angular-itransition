import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TypeError } from '../../types/error.type';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() control?: AbstractControl | null;

  @Input() showError?: boolean;

  get message(): string {
    const requiredError = this.control?.errors?.[TypeError.Required];
    const emailError = this.control?.errors?.[TypeError.Email];
    const minLengthError = this.control?.errors?.[TypeError.Minlength];
    const maxLengthError = this.control?.errors?.[TypeError.Maxlength];
    const onlyLetters = this.control?.errors?.[TypeError.OnlyLetters];

    if (requiredError) return 'This field is required!!!';

    if (emailError) {
      return 'Please check the email!!!';
    }

    if (minLengthError) {
      return `The password shouldn't be less than ${minLengthError?.requiredLength} characters.
      Actual length is ${minLengthError?.actualLength}.`;
    }

    if (maxLengthError) {
      return `The name should contain less than ${maxLengthError?.requiredLength} characters.
      Actual length is ${maxLengthError?.actualLength}.`;
    }

    if (onlyLetters) {
      return `The name should contain only letter.`;
    }

    return '';
  }
}
