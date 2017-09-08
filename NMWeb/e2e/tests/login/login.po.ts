import {$, browser, by, element, ElementFinder} from 'protractor'
import {TestSupport} from '../../test-support/test-support'
import {TestWait} from '../../test-support/wait'
import {UserProfilePage} from '../user-profile/user-profile.po'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise

let firebase = require("firebase");
require("firebase/auth");

export class LoginPage {
  private utils = new TestSupport()
  private wait = new TestWait()
  private userProfilePage = new UserProfilePage()

  private defaultSleep = 1000

  readonly userEmail = 'peoplematchertest@gmail.com'
  readonly userPassword = '@ngul@rAppT3st!n'
  readonly testUserName = 'People Matcher'

  private readonly menuButtonSelector = 'md-toolbar button'

  loginMenuButton: ElementFinder = $(this.menuButtonSelector)
  logoutButton: ElementFinder =
    element(by.cssContainingText('button.mat-menu-item', 'Log out'))
  logInViaGoogle: ElementFinder =
    element(by.cssContainingText('app-login button>span', 'Log in via Google'))
  loginButtonWithUserName: ElementFinder =
    element(by.cssContainingText(this.menuButtonSelector, this.testUserName))
  usernameField: ElementFinder = $('#identifierId')
  passwordField: ElementFinder = $('#password input')
  googleIdNextButton: ElementFinder = $('#identifierNext')
  googlePasswordNextButton: ElementFinder = $('#passwordNext')
  googleSearchInput: ElementFinder = $('input.gsfi')

  navigateTo() {
    return browser.get('/');
  }

  loginWhenAlreadySignedInToGoogle() {
    this.wait.forElement(this.loginMenuButton)
    this.loginMenuButton.click()
    this.logInViaGoogle.click()
    this.wait.forElement(this.userProfilePage.userProfileBasicInfo)
  }

  logInDefaultTestUser() {
    this.utils.switchTabs(1);
    this.enterGoogleUsername()
    this.enterGooglePassword()
    this.utils.switchTabs(0).then(() => {
      expect(this.confirmUserLoggedIn()).toBeTruthy()
    })
  }

  confirmUserLoggedIn(): Promise<boolean>  {
    this.wait.forElement(this.userProfilePage.userProfileBasicInfo)
    return element(by.cssContainingText(this.menuButtonSelector, this.testUserName)).isPresent()
  }

  logoutUser() {
    this.wait.forElement(this.loginMenuButton)
    this.loginMenuButton.click()
    this.wait.forElement(this.logoutButton)
    this.logoutButton.click()
  }

  confirmUserLoggedOut() {
    this.wait.forElement(this.loginMenuButton);
    expect(this.loginButtonWithUserName.isPresent()).toBeFalsy();
  }

  private enterGooglePassword() {
    browser.sleep(this.defaultSleep);
    this.wait.forElement(this.passwordField);
    this.passwordField.sendKeys(this.userPassword);
    this.wait.forElement(this.googlePasswordNextButton);
    this.googlePasswordNextButton.click();
  }

  private enterGoogleUsername() {
    this.wait.forElement(this.usernameField);
    this.usernameField.sendKeys(this.userEmail);
    this.wait.forElement(this.googleIdNextButton);
    browser.sleep(this.defaultSleep);
    this.googleIdNextButton.click();
  }
}
