import {$, browser, by, element, ElementFinder} from 'protractor'
import {CommonUtils} from '../../common/common-utils'
import {TestWaits} from '../../common/wait'
import {UserProfilePage} from '../user-profile/user-profile.po'

let firebase = require("firebase");
require("firebase/auth");

export class LoginPage {
  private utils = new CommonUtils()
  private wait = new TestWaits()
  private userProfilePage = new UserProfilePage()

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
  googleAccountSelectionText = 'Selecciona una cuenta'

  navigateTo() {
    browser.get('/');
  }

  loginIfNeeded(done) {
    this.loginMenuButton.click();
    this.logInViaGoogle.click();

    let tabsCount
    browser.getAllWindowHandles().then(handles => {
      tabsCount = handles.length
      if(tabsCount>1) {
        this.logInDefaultTestUser(done)
      }
    })
  }

  logInDefaultTestUser(done) {
    let defaultSleep = 1000;

    this.utils.switchTabs(1);
    this.enterGoogleUsername(defaultSleep)
    this.enterGooglePassword(defaultSleep)
    this.utils.switchTabs(0)

    return this.confirmUserLoggedIn(done)
  }

  confirmUserLoggedIn(done): any {    //rethink approach
    this.wait.forElement(this.userProfilePage.userProfileBasicInfo)
    this.utils.takeScreenshot('LoginPage')
    return element(by.cssContainingText(this.menuButtonSelector, this.testUserName)).isPresent().then(
      (isPresent) => {
        done()
        return isPresent
      }
    );
  }

  logoutUser() {
    this.wait.forElement(this.loginMenuButton)
    this.loginMenuButton.click()
    this.wait.forElement(this.logoutButton)
    this.logoutButton.click()
  }

  confirmUserLoggedOut() {
    this.wait.forElement(this.loginMenuButton);
    expect(this.wait.forElementNotPresent(this.loginButtonWithUserName)).toBeTruthy();
  }

  private enterGooglePassword(defaultSleep: number) {
    browser.sleep(defaultSleep);
    this.wait.forElement(this.passwordField);
    this.passwordField.sendKeys(this.userPassword);
    this.wait.forElement(this.googlePasswordNextButton);
    this.googlePasswordNextButton.click();
  }

  private enterGoogleUsername(defaultSleep: number) {
    this.wait.forElement(this.usernameField);
    this.usernameField.sendKeys(this.userEmail);
    this.wait.forElement(this.googleIdNextButton);
    browser.sleep(defaultSleep);
    this.googleIdNextButton.click();
  }
}
