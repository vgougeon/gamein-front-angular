import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    LayoutModule
  ]
})
export class ContainerModule { }
