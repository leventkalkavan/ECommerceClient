import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { BasketModule } from './basket/basket.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BasketModule,
    ProductsModule,
    HomeModule,   
    RegisterModule,
    //LoginModule
  ]
})
export class ComponentsModule { }
