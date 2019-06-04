import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../user-profile-shared/auth.service'
import { AuthDialogService } from '../../auth-dialog.service'

/**
 * Log in, log-out, sign-up, access to profile
 */
@Component({
  selector: 'app-header-user-account-button',
  templateUrl: './header-user-account-button.component.html',
  styleUrls: ['./header-user-account-button.component.scss']
})
export class HeaderUserAccountButtonComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public authDialogService: AuthDialogService,
  ) {
  }

  ngOnInit() {
  }

}
