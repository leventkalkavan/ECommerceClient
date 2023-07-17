import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/service/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  
  constructor(spinner: NgxSpinnerService, private httpClientService:HttpClientService){
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMuliple);
    
    this.httpClientService.get({
      controller: "products"
    }).subscribe(data=>console.log(data));


    //  this.httpClientService.post({
    //    controller:"products"
    //  },{
    //    name: "Kalem",
    //    stock: "3124",
    //    price: 22
    //  }).subscribe();

    // this.httpClientService.put({
    //   controller:"products",
    // },{
    //   id:"ccaa836a-1cab-4f76-3411-08db86b1f4a0",
    //   name:"atestdegistirildi",
    //   stock:"12",
    //   price: 1907
    // }
    // ).subscribe();

    this.httpClientService.delete({
      controller:"products",
    },"a61314ab-7c2b-4f32-0743-08db86c97fa8").subscribe();
  }

}
