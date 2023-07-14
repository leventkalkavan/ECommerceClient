import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from 'src/app/ui/components/home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersModule,
    DashboardModule,
    OrdersModule,
    ProductsModule,
    HomeModule
  ]
})
export class ComponentsModule { }
