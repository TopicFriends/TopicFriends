import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../user-profile-shared/auth.service';
import { AuthDialogService } from '../../core/auth-dialog.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetEmailFormControl: FormControl;
  resetEmailResponseMessage: string = '';

  constructor(private authService: AuthService, private authDialogService: AuthDialogService) { 
    this.resetEmailFormControl = new FormControl("resetEmailFormControl", [
      Validators.required,
      Validators.email
    ]);
  }

  ngOnInit() {
  }

  sendPasswordResetRequest() {
    this.authService.resetPassword(this.resetEmailFormControl.value)
                      .then((response) => {
                        this.resetEmailResponseMessage = 'Please follow the instructions in the e-mail we have just sent to you.';
                        this.authDialogService.closeDialog();
                      })
                      .catch((error) => {
                        this.resetEmailResponseMessage = error.message;
                      });
  }

}
