import {
  Component,
  OnInit,
} from '@angular/core';
import { AuthService } from '../user-profile-shared/auth.service';
import { Router } from '@angular/router';
import { DbService } from '../shared/db.service'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private db: DbService) {
    this.authService.user.subscribe(user => {
      if (user) {
        this.router.navigateByUrl("/profile");
      }
    });
  }

  ngOnInit() {}

  logInViaGoogle() {
    this.authService.loginViaGoogle();
  }

  logInViaGithub() {
    this.authService.logInViaGithub();
  }

  logInViaLinkedin() {
    window.open("assets/login/popup.html", "name", "height=585,width=400");
  }

  testFirestore() {
    this.db.test();
  }
}
