import { Component } from '@angular/core';
import {CustomToastrService, ToastrMessageType } from './services/ui/custom-toaster.service';
import { AuthService } from './services/common/auth.service';
import { Router } from '@angular/router';
import { AlertifyService, MessageType } from './services/admin/alertify.service';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public authService: AuthService, private toastrService: CustomToastrService, private router: Router, private alertify: AlertifyService) {
    authService.identityCheck();
  }

  signOut() {
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.router.navigate([""]);
    this.alertify.message("Oturum Kapatıldı",MessageType.Error)
    };
  }
