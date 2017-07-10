import { browser } from 'protractor';
import * as environment from '../../src/environments/environment.qa';

var firebase = require("firebase");
require("firebase/auth");

export class Login {
  userEmail = 'peoplematchertest@gmail.com';
  userPassword = '@ngul@rAppT3st!ng';

  navigateTo() {
    browser.get('/');
  }

  signInDefaultTestUser() {

  }

  logoutUser() {
    // logout
    // confirmUserLoggedOut(userId);
  }

  confirmUserLoggedOut(userId) {

  }

  // CLEANUP FOR LOGIN TESTS
  getCurrentUserUidFromFirebase() {

    firebase.initializeApp(environment.environment.firebase);
    let fireBaseUser = firebase.auth().currentUser;
    console.log(fireBaseUser)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('no');
      }
    });
  }
/*var p = new Promise(function(resolve, reject) {
 var observer = function(user) {
 // Unsubscribe on first call.
 unsubscribe();
 // Resolve with current state.
 resolve(user);
 };
 var unsubscribe = auth.onAuthStateChanged(observer);
 });*/

  deleteCurrentUserFromFirebase() {
    /*
     var user = firebase.auth().currentUser;

     user.delete().then(function() {
     // Check that user is deleted.
     }, function(error) {
     // An error happened. Fail cleanup.
     });
     */
  }
}
