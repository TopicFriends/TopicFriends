import {$, browser, by, element, ExpectedConditions} from 'protractor';
import * as environment from '../../src/environments/environment.qa';

var firebase = require("firebase");
require("firebase/auth");

export class Login {
  defaultleep = 2000;
  userEmail = 'peoplematchertest@gmail.com';
  userPassword = '@ngul@rAppT3st!ng';
  loginButton = $('md-toolbar button');
  usernameField = $('#identifierId');
  passwordField = $('#password input');
  googleIdNextButton = $('#identifierNext');
  googlePasswordNextButton = $('#passwordNext');

  navigateTo() {
    browser.get('/');
  }

  signInDefaultTestUser() {
    this.loginButton.click();

    browser.getAllWindowHandles().then(function (handles) {
      browser.driver.switchTo().window(handles[1]);
    });

    browser.wait(ExpectedConditions.presenceOf(this.usernameField));
    this.usernameField.sendKeys(this.userEmail);
    browser.wait(ExpectedConditions.presenceOf(this.googleIdNextButton));
    browser.sleep(this.defaultleep);
    this.googleIdNextButton.click();
    
    browser.sleep(this.defaultleep);
    browser.wait(ExpectedConditions.presenceOf(this.passwordField));
    this.passwordField.sendKeys(this.userPassword);
    browser.wait(ExpectedConditions.presenceOf(this.googlePasswordNextButton));
    this.googlePasswordNextButton.click();

    browser.getAllWindowHandles().then(function (handles) {
      browser.driver.switchTo().window(handles[0]);
    });

    return this.confirmUserLoggedIn();
  }

  private confirmUserLoggedIn(): any {
    return element(by.cssContainingText('app-login > p', 'login works!')).isPresent();
  }

  logoutUser() {
    // logout
    // confirmUserLoggedOut(userId);
  }

  private confirmUserLoggedOut(userId) {

  }

  // CLEANUP FOR LOGIN TESTS
  // getCurrentUserUidFromFirebase() {
  //
  //   firebase.initializeApp(environment.environment.firebase);
  //   let fireBaseUser = firebase.auth().currentUser;
  //   console.log(fireBaseUser)
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log(user)
  //     } else {
  //       console.log('no');
  //     }
  //   });
  // }
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
