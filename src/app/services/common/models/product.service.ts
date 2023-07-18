import { Injectable } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/service/common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpCli: HttpClientService) { }

  create(product:Create_Product, succesCallBack?: any){
    this.httpCli.post({
      controller:"products" 
    },product)
    .subscribe(result=>{
      succesCallBack();
    });
  }
}
