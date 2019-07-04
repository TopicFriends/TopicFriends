import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import { MatDialog } from '@angular/material'
import { AuthService } from '../user-profile-shared/auth.service'

@Injectable()
export class AuthDialogService {

  private dialogRef

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
  ) {
    this.authService.user.subscribe((user) => {
      if ( user ) {
        this.closeDialog();
      }
    })
  }

  public closeDialog(): void {
    if(this.dialogRef){
      this.dialogRef.close();
    }
  }

  public openLoginOrRegisterDialog() {
    this.dialogRef = this.dialog.open(LoginComponent, {autoFocus: false});
  }

  public getDialogRef() {
    return this.dialog;
  }

}
