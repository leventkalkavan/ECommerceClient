import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToasterService {

  constructor(private toastr: ToastrService) { }
  message(message: string,title:string, messageType:ToastrMessageType){
    this.toastr[messageType](message,title);
  }
}
export enum ToastrMessageType{
  Error="error",
  Success="success",
  Info="info",
  Warning="warning"
}
