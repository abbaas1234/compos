import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { StatsComponent } from './stats/stats.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StatsComponent,
    ItemsListComponent,
    ViewsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
