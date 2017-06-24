import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';


@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    console.log('AuthService constructor')
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
