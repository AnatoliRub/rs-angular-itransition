import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]',
})
export class BorderStyleDirective implements OnInit {
  @Input('appBorderStyle') date?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, this.setCardBorderColor());
  }

  setCardBorderColor(): string {
    console.log('olololololo');
    const dateNow = new Date();
    const datePublish = new Date(Number(this.date!));
    const difference = Math.floor((dateNow.getTime() - datePublish.getTime()) / 86400000);
    if (difference < 7) return 'blue';
    if (difference < 30) return 'green';
    if (difference < 180) return 'yellow';
    return 'red';
  }
}
