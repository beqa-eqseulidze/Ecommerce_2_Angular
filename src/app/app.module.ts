import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainLayoutModule } from './features/main-layout/main-layout.module';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
const routes:Routes=[
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:() =>import('./pages/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'auth',
        loadChildren:() =>import('./pages/auth/auth.module').then(m=>m.AuthModule)
      },
      {
        path:'cart',
        loadChildren:() =>import('./pages/cart/cart.module').then(m=>m.CartModule)
      },
      {
        path:'products',
        loadChildren:() =>import('./pages/products/products.module').then(m=>m.ProductsModule)
      },
      {
        path:'order',
        loadChildren:() =>import('./pages/order/order.module').then(m=>m.OrderModule)
      }
    ]
  }

]

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MainLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
