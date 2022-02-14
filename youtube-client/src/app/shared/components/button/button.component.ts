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

  setStyles(): {
    icon: boolean;
    text: boolean;
    circle: boolean;
    link: boolean;
  } {
    return {
      icon: this.type === Type.Icon,
      text: this.type === (Type.Text || Type.Submit),
      circle: this.type === Type.Circle,
      link: this.type === Type.Link,
    };
  }

  setTypeButton(): Type.Submit | Type.Button {
    return this.type === Type.Submit ? Type.Submit : Type.Button;
  }

  noImage(): boolean {
    return this.type !== Type.Image;
  }

  onBtnClick(): void {
    this.clickHandler.emit();
  }
}
