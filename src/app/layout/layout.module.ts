import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SidenavModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
