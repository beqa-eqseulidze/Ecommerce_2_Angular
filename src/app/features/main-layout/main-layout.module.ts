import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { HeaderComponent } from './coponents/header/header.component';
import { Routes, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
