import { Component } from '@angular/core';
import { CustomToasterService, ToastrMessageType } from './services/ui/custom-toaster.service';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService: CustomToasterService) {
    // toastrService.message("-bir dost", "Selam sana",ToastrMessageType.Info);
  }
    
}
