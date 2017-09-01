import {$, browser, by, element, ElementFinder} from 'protractor';
import {CommonUtils} from '../common-utils';

let firebase = require("firebase");
require("firebase/auth");

export class LoginPage {
  private utils = new CommonUtils();

  userEmail = 'peoplematchertest@gmail.com';
  userPassword = '@ngul@rAppT3st!ng';
  testUserName = 'People Matcher';
  private menuButtonSelector = 'md-toolbar button';

  loginMenuButton: ElementFinder = $(this.menuButtonSelector);
  logoutButton: ElementFinder =
    element(by.cssContainingText('button.mat-menu-item', 'Log out'));
  logInViaGoogle: ElementFinder =
    element(by.cssContainingText('app-login button>span', 'Log in via Google'));
  loginButtonWithUserName: ElementFinder =
    element(by.cssContainingText(this.menuButtonSelector, this.testUserName));
  usernameField: ElementFinder = $('#identifierId');
  passwordField: ElementFinder = $('#password input');
  googleIdNextButton: ElementFinder = $('#identifierNext');
  googlePasswordNextButton: ElementFinder = $('#passwordNext');

  navigateTo() {
    browser.get('/');
  }

  logInDefaultTestUser(done) {
    let defaultSleep = 1000;
    this.loginMenuButton.click();
    this.logInViaGoogle.click();

    this.utils.switchTabs(1);

    this.utils.waitForElement(this.usernameField);
    this.usernameField.sendKeys(this.userEmail);
    this.utils.waitForElement(this.googleIdNextButton);
    browser.sleep(defaultSleep);
    this.googleIdNextButton.click();

    browser.sleep(defaultSleep);
    this.utils.waitForElement(this.passwordField);
    this.passwordField.sendKeys(this.userPassword);
    this.utils.waitForElement(this.googlePasswordNextButton);
    this.googlePasswordNextButton.click();

    this.utils.switchTabs(0);

    return this.confirmUserLoggedIn(done);
  }

  confirmUserLoggedIn(done): any {
    this.utils.waitForElement(element(by.cssContainingText(this.menuButtonSelector, this.testUserName)));
    this.utils.takeScreenshot('LoginPage');
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
    this.utils.waitForElement(this.loginMenuButton);
    expect(this.utils.waitForElementNotPresent(this.loginButtonWithUserName)).toBeTruthy();
  }
}
