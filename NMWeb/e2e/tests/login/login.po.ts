import { $, browser, by, element, ElementFinder } from "protractor";
import { TestSupport } from "../../test-support/test-support";
import { TestWait } from "../../test-support/wait";
import { UserProfilePage } from "../user-profile/user-profile.po";
import { promise } from "selenium-webdriver";
import Promise = promise.Promise;
import { ProtractorWrapper } from "../../test-support/protractor-wrapper";

let firebase = require("firebase");
require("firebase/auth");

export class LoginPage {
  private utils = new TestSupport();
  private wait = new TestWait();
  private userProfilePage = new UserProfilePage();
  private ptor = new ProtractorWrapper();

  private defaultSleep = 1000;

  private readonly loginMenuButtonSelector =
    "button.user-profile-corner-button";

  // readonly userEmail = "peoplematchertest@gmail.com";
  // readonly userPassword = "@ngul@rAppT3st!n";
  // readonly testUserName = "People Matcher";

  readonly userEmail = "qa.cod3r@gmail.com";
  readonly userPassword = "Qatestswithtestcafe!";
  readonly testUserName = "QA Tester";

  loginMenuButton: ElementFinder = $(this.loginMenuButtonSelector);
  logoutButton: ElementFinder = element(
    by.cssContainingText("button.mat-menu-item", "Log out")
  );
  logInViaGoogle: ElementFinder = element(
    by.cssContainingText("app-login button>span", "Log in via Google")
  );
  loginButtonWithUserName: ElementFinder = element(
    by.cssContainingText(this.loginMenuButtonSelector, this.testUserName)
  );
  usernameField: ElementFinder = $("#identifierId");
  passwordField: ElementFinder = $("#password input");
  googleIdNextButton: ElementFinder = $("#identifierNext");
  googlePasswordNextButton: ElementFinder = $("#passwordNext");
  googleSearchInput: ElementFinder = $("input.gsfi");

  navigateTo() {
    return browser.get("/");
  }

  loginWhenAlreadySignedInToGoogle() {
    this.ptor.click(this.loginMenuButton);
    this.ptor.click(this.logInViaGoogle);
    this.wait.forElementPresent(this.userProfilePage.userProfileBasicInfo);
  }

  logInDefaultTestUser() {
    browser.sleep(this.defaultSleep);
    this.utils.switchTabs(1);
    this.enterGoogleUsername();
    this.enterGooglePassword();
    this.utils.switchTabs(0).then(() => {
      expect(this.confirmUserLoggedIn()).toBeTruthy("User not logged in");
    });
  }

  confirmUserLoggedIn(): Promise<boolean> {
    return this.wait.forElementText(
      $(this.loginMenuButtonSelector),
      this.testUserName
    );
  }

  logoutUser() {
    this.ptor.click(this.loginMenuButton);
    this.ptor.click(this.logoutButton);
  }

  confirmUserLoggedOut() {
    this.wait.forElementPresent(this.loginMenuButton);
    expect(this.loginButtonWithUserName.isPresent()).toBeFalsy(
      "User not logged out"
    );
  }

  private enterGoogleUsername() {
    this.wait.forElementClickable(this.usernameField);
    this.ptor.sendKeys(this.usernameField, this.userEmail);
    this.ptor.click(this.googleIdNextButton);
  }

  private enterGooglePassword() {
    browser.sleep(this.defaultSleep);
    this.wait.forElementClickable(this.passwordField);
    this.ptor.sendKeys(this.passwordField, this.userPassword);
    this.ptor.click(this.googlePasswordNextButton);
  }
}
