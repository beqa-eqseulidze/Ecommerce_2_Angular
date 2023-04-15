import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductCardModule } from '../../features/product-card/product-card.module';

const routes:Routes=[
  {
    path:'',
    component: HomeComponent
  }

]

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCardModule

  ]
})
export class HomeModule { }
