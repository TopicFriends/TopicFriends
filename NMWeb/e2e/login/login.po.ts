import {$, browser, by, element, ExpectedConditions} from 'protractor';
import * as environment from '../../src/environments/environment.qa';

var firebase = require("firebase");
require("firebase/auth");
var fs = require('fs-extra');

export class Login {
  defaultSleep = 1000;
  ec = ExpectedConditions;

  userEmail = 'peoplematchertest@gmail.com';
  userPassword = '@ngul@rAppT3st!ng';
  loginButton =  element(by.cssContainingText('md-toolbar button', 'Login via Google'));
  usernameField = $('#identifierId');
  passwordField = $('#password input');
  googleIdNextButton = $('#identifierNext');
  googlePasswordNextButton = $('#passwordNext');

  navigateTo() {
    browser.get('/');
  }

  signInDefaultTestUser() {   //TODO: refactor
    this.loginButton.click();

    browser.getAllWindowHandles().then(function (handles) {
      browser.driver.switchTo().window(handles[1]);
    });

    browser.wait(ExpectedConditions.presenceOf(this.usernameField));
    this.usernameField.sendKeys(this.userEmail);
    browser.wait(ExpectedConditions.presenceOf(this.googleIdNextButton));
    browser.sleep(this.defaultSleep);
    this.googleIdNextButton.click();

    browser.sleep(this.defaultSleep);
    browser.wait(ExpectedConditions.presenceOf(this.passwordField));
    this.passwordField.sendKeys(this.userPassword);
    browser.wait(ExpectedConditions.presenceOf(this.googlePasswordNextButton));
    this.googlePasswordNextButton.click();

    browser.getAllWindowHandles().then(function (handles) {
      browser.driver.switchTo().window(handles[0]);
    });

    return this.confirmUserLoggedIn();
  }

  confirmUserLoggedIn(): any {
    var waitResult = browser.wait(this.ec.not(this.ec.presenceOf(this.loginButton)));
    this.takeScreenshot();

    return waitResult;
  }

  takeScreenshot() {
    let fs = require('fs');
    let folderPath = '/tmp/protractor';

    if (!fs.existsSync(folderPath)) {
      this.createDirectoryRecursively(folderPath);
    }

    browser.takeScreenshot().then(function (png) {
      let stream = fs.createWriteStream(folderPath + '/screenshot-' + new Date().getTime() + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }

  private createDirectoryRecursively(path: string) {
    fs.mkdirp(path, function (err) {
      if (err) {
        console.error('Directory "' + path + '" not created!', err);
      } else {
        console.log('Directory "' + path + '" created!')
      }
    });
  }

  logoutUser() {
    this.loginButton.click();
    return this.confirmUserLoggedOut();
  }

  confirmUserLoggedOut() {
    return this.loginButton.isPresent();    //wait for the button?
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
