import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
// import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginByEmailAndPasswordComponent } from './login-by-email-and-password/login-by-email-and-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    // LoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LoginByEmailAndPasswordComponent, ResetPasswordComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
