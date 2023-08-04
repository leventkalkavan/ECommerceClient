import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { CustomToasterService, ToastrMessageType } from 'src/app/services/ui/custom-toaster.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, private router: Router, private toastrService: CustomToasterService, private spinner: NgxSpinnerService, private alertify: AlertifyService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.spinner.show(SpinnerType.BallAtom);
    const token: string = localStorage.getItem("accessToken");

    //const decodeToken = this.jwtHelper.decodeToken(token);
    //const expirationDate: Date = this.jwtHelper.getTokenExpirationDate(token);
    let expired: boolean;
    try {
      expired = this.jwtHelper.isTokenExpired(token);
    } catch {
      expired = true;
    }

    if (!token || expired) {
      this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
      this.alertify.message("Yetkisiz erisim giris yapın.", MessageType.Error);
    }
    this.spinner.hide(SpinnerType.BallAtom);

    return true;
  }

}