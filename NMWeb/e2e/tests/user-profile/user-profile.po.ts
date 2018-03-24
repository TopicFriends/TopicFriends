import {$, browser, by, element, ElementFinder, protractor} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {ProtractorWrapper} from '../../test-support/protractor-wrapper'
import {TestAssertions} from '../../test-support/assertions'

export class UserProfilePage {
  private ptor = new ProtractorWrapper()
  private assert = new TestAssertions()

  userProfileSelector                      = 'app-user-profile-details'
  userProfile: ElementFinder               = $(this.userProfileSelector)
  userProfileBasicInfo: ElementFinder      = $('app-user-profile-basic-info')
  userProfileDescription: ElementFinder    = $('textarea[id="mat-input-3"]')
  userProfileWhatYouExpect: ElementFinder  = $('textarea[formControlName="whatDoYouExpectFromTheApp"]')

  pleaseLogInButton: ElementFinder         = $(this.userProfileSelector + ' button')
  saveProfileButton: ElementFinder         = $('#saveProfile')

  linkedInLinkInput: ElementFinder         = $('i[class="icon ion-social-linkedin"]').
                                             element(by.xpath('ancestor::mat-form-field/descendant::input'))

  saveConfirmationNotification             = element(by.cssContainingText('div.cdk-overlay-container>div',
                                              'Profile sent. Thank you!'))

  acceptPrivacyPolicyCheckbox              = $('input[type="checkbox"]')
  acceptCookiesButton                      = $('cookie-law-el button')

  navigateTo(): Promise<any> {
    return browser.get('profile')
  }

  saveProfileWithKeyboard() {
    this.markAcceptPrivacyPolicyIfNeeded()

    this.ptor.click(this.userProfileDescription)
    this.userProfileBasicInfo.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'S'))
  }

  saveProfileByClickingSaveButton() {
    this.markAcceptPrivacyPolicyIfNeeded()

    this.ptor.click(this.saveProfileButton)
    this.assert.saveNotificationAppears(this.saveConfirmationNotification)
  }

  private markAcceptPrivacyPolicyIfNeeded() {
    this.acceptPrivacyPolicyCheckbox.isSelected().then(selected => {
      if (!selected) {
        this.ptor.click(this.acceptPrivacyPolicyCheckbox)
      }
    })
  }
}
