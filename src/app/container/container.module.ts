import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { HeaderModule } from '../layout/header/header.module';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    HeaderModule
  ]
})
export class ContainerModule { }
