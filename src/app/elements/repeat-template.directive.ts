import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatTemplate]'
})
export class RepeatTemplateDirective {

  @Input('appRepeatTemplate') set render(times: number) {
    for (let i = 0; i < times; i++) {
      this.vcRef.createEmbeddedView(this.templateRef, {})
    }
  }

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
