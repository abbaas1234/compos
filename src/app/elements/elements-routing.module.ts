import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from '../collections/collections-home/collections-home.component';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  {path: '', component: ElementsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
