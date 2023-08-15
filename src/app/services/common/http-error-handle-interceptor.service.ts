import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../ui/custom-toaster.service';
import { UserAuthService } from './models/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {

  constructor(private toastrService: CustomToastrService,private userAuthService: UserAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(error => {
      switch (error.status) {
        case HttpStatusCode.Unauthorized:
          this.toastrService.message("Bu islemi yapmaya yetkiniz bulunmamakta", "Yetkisiz islem", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken")).then(data => {

          });
          break;
        case HttpStatusCode.InternalServerError:
          this.toastrService.message("Sunucuya erisilmiyor", "Sunucu hatasi", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        case HttpStatusCode.BadRequest:
          this.toastrService.message("Gecersiz istek yapildi", "Gecersiz istek", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        case HttpStatusCode.NotFound:
          this.toastrService.message("Sayfa bulunamadi", "Sayfa bulunamadi", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        default:
          this.toastrService.message("Beklenmeyen bir hata meydana gelmistir", "Hata", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
      }
      return of(error);
    }));
  }
}