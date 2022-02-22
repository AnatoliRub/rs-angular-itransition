import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Type } from '../../types/button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: string = 'text';

  @Input() isDisabled?: boolean;

  @Input() caption?: string;

  @Input() src?: string;

  @Output() clickHandler: EventEmitter<void> = new EventEmitter<void>();

  typesList = Type;

  onBtnClick(): void {
    this.clickHandler.emit();
  }
}
