import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;

  /** Crude way to save from observable, revise for async later */
  public userSaved: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      this.userSaved = user;
    });
  }

  loginViaGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  // loginViaLinkedIn() {
  //   return this.afAuth.auth.signInWithCustomToken() // JSONP token
  // }

  logout() {
    this.userSaved = null;
    return this.afAuth.auth.signOut();
  }

  signUpWithEmailAndPassword(email, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(function(data) {
        console.log("Signing up successful", data);
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log("Error on creating account", error);
      });
  }

  logInViaEmailAndPassword(email, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(response => console.log("Logged in correctly", response))
      .catch(error => console.log("Error loggin in", error));
  }
}
