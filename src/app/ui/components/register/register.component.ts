import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { Create_User } from 'src/app/contracts/create_user';
import { User } from 'src/app/entites/user';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertify: AlertifyService ,spinner: NgxSpinnerService) {
    super(spinner);
  }

  frm: FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      nameSurname: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      userName: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      email: ["", [
        Validators.required,
        Validators.maxLength(250),
        Validators.email
      ]],
      password: ["",
        [
          Validators.required
        ]],
      passwordAgain: ["",
        [
          Validators.required
        ]]
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {
        let password = group.get("password").value;
        let passwordAgain = group.get("passwordAgain").value;
        return password === passwordAgain ? null : { notSame: true };
      }
    })
  }

  get component() {
    return this.frm.controls;
  }

  submitted: boolean = false;
  async onSubmit(user: User) {
    this.submitted = true;

    //200 vermesine rağmen hata mesajını yayınlıyo çözemedim
    const result: Create_User = await this.userService.create(user);
    if (result.succeeded){
          this.alertify.message("Kullanıcı eklenmiştir.", MessageType.Success);}
    else{
      this.alertify.message("Kullanıcı eklenirlen hata.", MessageType.Error);}

  }
}