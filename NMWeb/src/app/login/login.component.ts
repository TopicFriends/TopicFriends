import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user-profile-shared/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.user.subscribe(user => {
      if ( user ) {
        this.router.navigateByUrl('/profile')
      }
    })
  }

  ngOnInit() {
  }

  logInViaGoogle() {
    this.authService.loginViaGoogle()
  }

  logInViaLinkedin() {
    window.open('assets/login/popup.html', 'name', 'height=585,width=400');
  }

  logInViaEmailAndPassword() {
    // TODO: read from form: https://angular.io/guide/forms
    this.authService.logInViaEmailAndPassword('topicfriends-test@gmail.com', '----TFPass....')
  }
}
