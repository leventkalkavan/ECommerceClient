import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
