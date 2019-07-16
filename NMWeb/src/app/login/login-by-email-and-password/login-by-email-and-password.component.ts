import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  NgForm,
  Validators,
} from '@angular/forms'
import { AuthService } from '../../user-profile-shared/auth.service';
import { AuthDialogService } from '../../core/auth-dialog.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: "app-login-by-email-and-password",
  templateUrl: "./login-by-email-and-password.component.html",
  styleUrls: ["./login-by-email-and-password.component.scss"]
})
export class LoginByEmailAndPasswordComponent implements OnInit {
  logInSignUpToggleButton: boolean = false;

  errorMessage: string = null;
  loginEmailFormControl = new FormControl("loginEmailFormControl", [
    Validators.required,
    Validators.email
  ]);
  registerEmailFormControl = new FormControl("registerEmailFormControl", [
    Validators.required,
    Validators.email
  ]);
  loginPasswordFormControl = new FormControl("loginPasswordFormControl", [
    Validators.required,
    // Minimum length of password for Firebase is 8??
    Validators.minLength(8)
  ]);
  registerPasswordFormControl = new FormControl("registerPasswordFormControl", [
    Validators.required,
    // Minimum length of password for Firebase is 8??
    Validators.minLength(8)
  ]);
  repeatPasswordFormControl = new FormControl("repeatPasswordFormControl", [
    Validators.required,
    // Minimum length of password for Firebase is 8??
    Validators.minLength(8)
  ]);
  constructor(private authService: AuthService, private authDialogService: AuthDialogService) { }

  ngOnInit() {}
  private handleError(error) {
    if (typeof error === "object") {
      this.errorMessage = error.message;
    }
    if (typeof error === "string") {
      this.errorMessage = error;
    }
    return this.errorMessage;
  }
  signUpWithEmailAndPassword(form: NgForm) {
    const email = this.registerEmailFormControl.value;
    const password = this.registerPasswordFormControl.value;
    const password2 = this.repeatPasswordFormControl.value;
    if (password === password2) {
      this.authService
        .signUpWithEmailAndPassword(email, password)
        .then(response => response)
        .catch(errorMessage => this.handleError(errorMessage));
    } else {
      // To finish: Adding cutom validators
      this.handleError("Passwords don't match!");
    }
  }

  logInViaEmailAndPassword(form: NgForm) {
    const email = this.loginEmailFormControl.value;
    const password = this.loginPasswordFormControl.value;
    this.authService
      .logInViaEmailAndPassword(email, password)
      .then(response => response)
      .catch(errorMessage => this.handleError(errorMessage));
  }

  toggleLoginSignUpFields() {
    this.logInSignUpToggleButton = !this.logInSignUpToggleButton;
    return this.logInSignUpToggleButton;
  }

  openResetPasswordDialog() {
    this.authDialogService.closeDialog();
    this.authDialogService.getDialogRef().open(ResetPasswordComponent, {autoFocus: false});
  }

}
