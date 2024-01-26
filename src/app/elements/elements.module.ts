import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PalceHolderComponent } from './palce-holder/palce-holder.component';
import { RepeatTemplateDirective } from './repeat-template.directive';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PalceHolderComponent,
    RepeatTemplateDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }
