import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';


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
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // loginViaLinkedIn() {
  //   return this.afAuth.auth.signInWithCustomToken() // JSONP token
  // }

  logout() {
    this.userSaved = null;
    return this.afAuth.auth.signOut();
  }
}
