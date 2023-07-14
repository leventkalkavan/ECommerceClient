import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeadersComponent } from './headers/headers.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    HeadersComponent,
    SiderbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeadersComponent,
    SiderbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
