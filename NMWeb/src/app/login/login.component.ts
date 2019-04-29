import { Component, OnInit } from "@angular/core";
import { AuthService } from "../user-profile-shared/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  logInSignUpToggleButton: boolean = false;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl("", [
    Validators.required,
    // Minimum length off password for Firebase is 8??
    Validators.minLength(8)
  ]);
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

  signUpWithEmailAndPassword(form: NgForm) {

    const email = form.form.controls.email.value;
    const password = form.form.controls.password.value;
    const password2 = form.form.controls.password2.value;
    if (password === password2) {
      this.authService.signUpWithEmailAndPassword(email, password);
    } else {
      // To finish: Adding cutom validators
      console.log("Passwords don't match");
    }
  }

  logInViaEmailAndPassword(form: NgForm) {
    // TODO: read from form: https://angular.io/guide/forms
    // So far hardcoded values:
    //this.authService.logInViaEmailAndPassword('topicfriends-test@gmail.com', '----TFPass....')

    const email = form.form.controls.email.value;
    const password = form.form.controls.password.value;

    this.authService.logInViaEmailAndPassword(email, password);
  }

  toggleLoginSignUpFields() {
    this.logInSignUpToggleButton = !this.logInSignUpToggleButton;
    return this.logInSignUpToggleButton;
  }
}
