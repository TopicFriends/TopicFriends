import {$, browser, by, element, ExpectedConditions} from 'protractor';
import * as environment from '../../src/environments/environment.qa';
import {CommonUtils} from '../common-utils';

let firebase = require("firebase");
require("firebase/auth");

export class Login {
  private defaultSleep = 1000;
  private utils = new CommonUtils();

  userEmail = 'peoplematchertest@gmail.com';
  userPassword = '@ngul@rAppT3st!ng';
  testUserName = 'People Matcher';

  private menuButtonSelector = 'md-toolbar button';
  loginMenuButton = $(this.menuButtonSelector);
  loginButton = element(by.cssContainingText(this.menuButtonSelector, 'Login via Google'));
  logoutButton = element(by.cssContainingText('button.mat-menu-item', 'Logout'));
  usernameField = $('#identifierId');
  passwordField = $('#password input');
  googleIdNextButton = $('#identifierNext');
  googlePasswordNextButton = $('#passwordNext');

  navigateTo() {
    browser.get('/');
  }

  signInDefaultTestUser(done) {   //TODO: refactor
    this.loginButton.click();

    this.utils.switchTabs(1);

    this.utils.waitForElement(this.usernameField);
    this.usernameField.sendKeys(this.userEmail);
    this.utils.waitForElement(this.googleIdNextButton);
    browser.sleep(this.defaultSleep);
    this.googleIdNextButton.click();

    browser.sleep(this.defaultSleep);
    this.utils.waitForElement(this.passwordField);
    this.passwordField.sendKeys(this.userPassword);
    this.utils.waitForElement(this.googlePasswordNextButton);
    this.googlePasswordNextButton.click();

    this.utils.switchTabs(0);

    return this.confirmUserLoggedIn(done);
  }

  confirmUserLoggedIn(done): any {
    this.utils.waitForElement(this.loginMenuButton);   //the button is shown at all
    this.utils.waitForElementNotPresent(this.loginButton);  //the button does NOT say to log in
    this.utils.takeScreenshot('Login');
    return element(by.cssContainingText(this.menuButtonSelector, this.testUserName)).isPresent().then(
      (isPresent) => {
        done();
        return isPresent;
      }
    );
  }

  logoutUser() {
    this.utils.waitForElement(this.loginMenuButton).then(() => {
      this.loginMenuButton.click();
      this.logoutButton.click();
    });
  }

  confirmUserLoggedOut() {
    return this.utils.waitForElement(this.loginButton); //
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
