import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.container.createEmbeddedView(this.template);

    setTimeout(() => {
      this.container.clear();
    }, 5000);
  }
}
