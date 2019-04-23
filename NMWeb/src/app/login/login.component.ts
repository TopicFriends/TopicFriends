import { Component, OnInit } from "@angular/core";
import { AuthService } from "../user-profile-shared/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
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

  logInViaLinkedin() {
    window.open("assets/login/popup.html", "name", "height=585,width=400");
  }

  logInViaEmailAndPassword(form: NgForm) {
    // TODO: read from form: https://angular.io/guide/forms
    // So far hardcoded values:
    //this.authService.logInViaEmailAndPassword('topicfriends-test@gmail.com', '----TFPass....')
    const email = form.value.email;
    const password = form.value.password;
    this.authService.logInViaEmailAndPassword(email, password);
  }
}
