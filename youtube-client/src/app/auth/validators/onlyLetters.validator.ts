import { AbstractControl, ValidationErrors } from '@angular/forms';

export function OnlyLetters(control: AbstractControl): ValidationErrors | null {
  const pattern = '^[a-zA-Z]$';
  if (!control.value.match(new RegExp(pattern))) {
    return { onlyLetters: true };
  }
  return null;
}
