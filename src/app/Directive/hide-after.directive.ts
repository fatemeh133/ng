import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef,
  input,
} from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('appHideAfter') delay = 0;
  @Input('appHideAfterThen') appear: TemplateRef<any> | null = null;
  @Input('appHideAfterAtend') logtext: string = '';

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.container.createEmbeddedView(this.template);

    setTimeout(() => {
      this.container.clear();
    }, this.delay);

    setTimeout(() => {
      if (this.appear) {
        this.container.createEmbeddedView(this.appear);
        console.log(this.logtext);
      }
    }, this.delay);
  }
}
