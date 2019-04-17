"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var protractor_wrapper_1 = require("../../test-support/protractor-wrapper");
var assertions_1 = require("../../test-support/assertions");
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage() {
        this.ptor = new protractor_wrapper_1.ProtractorWrapper();
        this.assert = new assertions_1.TestAssertions();
        this.userProfileSelector = 'app-user-profile-details';
        this.userProfile = protractor_1.$(this.userProfileSelector);
        this.userProfileBasicInfo = protractor_1.$('app-user-profile-basic-info');
        this.userProfileDescription = protractor_1.$('textarea[id="mat-input-3"]');
        this.userProfileWhatYouExpect = protractor_1.$('textarea[formControlName="whatDoYouExpectFromTheApp"]');
        this.pleaseLogInButton = protractor_1.$(this.userProfileSelector + ' button');
        this.saveProfileButton = protractor_1.$('#saveProfile');
        this.linkedInLinkInput = protractor_1.$('i[class="icon ion-social-linkedin"]').
            element(protractor_1.by.xpath('ancestor::mat-form-field/descendant::input'));
        this.saveConfirmationNotification = protractor_1.element(protractor_1.by.cssContainingText('div.cdk-overlay-container>div', 'Profile sent. Thank you!'));
        this.acceptPrivacyPolicyCheckbox = protractor_1.$('input[type="checkbox"]');
        this.acceptCookiesButton = protractor_1.$('cookie-law-el button');
    }
    UserProfilePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('profile');
    };
    UserProfilePage.prototype.saveProfileWithKeyboard = function () {
        this.markAcceptPrivacyPolicyIfNeeded();
        this.ptor.click(this.userProfileDescription);
        this.userProfileBasicInfo.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, 'S'));
    };
    UserProfilePage.prototype.saveProfileByClickingSaveButton = function () {
        this.markAcceptPrivacyPolicyIfNeeded();
        this.ptor.click(this.saveProfileButton);
        this.assert.saveNotificationAppears(this.saveConfirmationNotification);
    };
    UserProfilePage.prototype.markAcceptPrivacyPolicyIfNeeded = function () {
        var _this = this;
        this.acceptPrivacyPolicyCheckbox.isSelected().then(function (selected) {
            if (!selected) {
                _this.ptor.click(_this.acceptPrivacyPolicyCheckbox);
            }
        });
    };
    return UserProfilePage;
}());
exports.UserProfilePage = UserProfilePage;
