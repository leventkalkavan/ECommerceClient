import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';
import { ProductsComponent } from '../products/products.component';
import { DashboardComponent } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"", component:CustomersComponent
      }
    ])
  ]
})
export class CustomersModule { }
