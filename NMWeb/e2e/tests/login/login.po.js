"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var test_support_1 = require("../../test-support/test-support");
var wait_1 = require("../../test-support/wait");
var user_profile_po_1 = require("../user-profile/user-profile.po");
var protractor_wrapper_1 = require("../../test-support/protractor-wrapper");
var firebase = require("firebase");
require("firebase/auth");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.utils = new test_support_1.TestSupport();
        this.wait = new wait_1.TestWait();
        this.userProfilePage = new user_profile_po_1.UserProfilePage();
        this.ptor = new protractor_wrapper_1.ProtractorWrapper();
        this.defaultSleep = 1000;
        this.loginMenuButtonSelector = "button.user-profile-corner-button";
        // readonly userEmail = "peoplematchertest@gmail.com";
        // readonly userPassword = "@ngul@rAppT3st!n";
        // readonly testUserName = "People Matcher";
        this.userEmail = "qa.cod3r@gmail.com";
        this.userPassword = "Qatestswithtestcafe!";
        this.testUserName = "QA Tester";
        this.loginMenuButton = protractor_1.$(this.loginMenuButtonSelector);
        this.logoutButton = protractor_1.element(protractor_1.by.cssContainingText("button.mat-menu-item", "Log out"));
        this.logInViaGoogle = protractor_1.element(protractor_1.by.cssContainingText("app-login button>span", "Log in via Google"));
        this.loginButtonWithUserName = protractor_1.element(protractor_1.by.cssContainingText(this.loginMenuButtonSelector, this.testUserName));
        this.usernameField = protractor_1.$("#identifierId");
        this.passwordField = protractor_1.$("#password input");
        this.googleIdNextButton = protractor_1.$("#identifierNext");
        this.googlePasswordNextButton = protractor_1.$("#passwordNext");
        this.googleSearchInput = protractor_1.$("input.gsfi");
    }
    LoginPage.prototype.navigateTo = function () {
        return protractor_1.browser.get("/");
    };
    LoginPage.prototype.loginWhenAlreadySignedInToGoogle = function () {
        this.ptor.click(this.loginMenuButton);
        this.ptor.click(this.logInViaGoogle);
        this.wait.forElementPresent(this.userProfilePage.userProfileBasicInfo);
    };
    LoginPage.prototype.logInDefaultTestUser = function () {
        var _this = this;
        protractor_1.browser.sleep(this.defaultSleep);
        this.utils.switchTabs(1);
        this.enterGoogleUsername();
        this.enterGooglePassword();
        this.utils.switchTabs(0).then(function () {
            expect(_this.confirmUserLoggedIn()).toBeTruthy("User not logged in");
        });
    };
    LoginPage.prototype.confirmUserLoggedIn = function () {
        return this.wait.forElementText(protractor_1.$(this.loginMenuButtonSelector), this.testUserName);
    };
    LoginPage.prototype.logoutUser = function () {
        this.ptor.click(this.loginMenuButton);
        this.ptor.click(this.logoutButton);
    };
    LoginPage.prototype.confirmUserLoggedOut = function () {
        this.wait.forElementPresent(this.loginMenuButton);
        expect(this.loginButtonWithUserName.isPresent()).toBeFalsy("User not logged out");
    };
    LoginPage.prototype.enterGoogleUsername = function () {
        this.wait.forElementClickable(this.usernameField);
        this.ptor.sendKeys(this.usernameField, this.userEmail);
        this.ptor.click(this.googleIdNextButton);
    };
    LoginPage.prototype.enterGooglePassword = function () {
        protractor_1.browser.sleep(this.defaultSleep);
        this.wait.forElementClickable(this.passwordField);
        this.ptor.sendKeys(this.passwordField, this.userPassword);
        this.ptor.click(this.googlePasswordNextButton);
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
