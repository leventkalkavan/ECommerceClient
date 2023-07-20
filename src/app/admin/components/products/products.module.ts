import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';import 
{ MatDialogModule } from '@angular/material/dialog';
import { DeleteDirective } from 'src/app/base/directives/admin/delete.directive';
import { DeleteDialogComponent } from 'src/app/dialog/delete-dialog/delete-dialog.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    DeleteDirective,
    ListComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"", component:ProductsComponent
      }
    ]),
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule, 
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class ProductsModule { }
