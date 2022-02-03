import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() name: string = '';

  @Input() type?: string = 'text';

  @Input() control?: AbstractControl | null;

  @Input() form?: FormGroup;

  @Input() caption?: string;
}
