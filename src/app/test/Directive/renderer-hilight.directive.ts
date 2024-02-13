import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  input,
} from '@angular/core';

@Directive({
  selector: '[appRendererHilight]',
})
export class RendererHilightDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() hovertColor: string = 'red';

  constructor(private renderer: Renderer2, private element: ElementRef) {
    // renderer.setStyle(element.nativeElement, 'background-color', 'orange');
  }

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;

  @HostListener('mouseenter') changeColor() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'orange'
    // );
    this.background = this.hovertColor;
  }
  @HostListener('mouseleave') bringBackColor() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.background = this.defaultColor;
  }
}
