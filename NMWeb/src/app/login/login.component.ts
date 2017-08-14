import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user-profile/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logInViaGoogle() {
    this.authService.loginViaGoogle()
  }

  logInViaLinkedin() {
    window.open('assets/login/popup.html', 'name', 'height=585,width=400');
  }

}
