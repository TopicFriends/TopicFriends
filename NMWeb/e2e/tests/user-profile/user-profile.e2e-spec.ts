import {UserProfilePage} from './user-profile.po'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestAssertions} from '../../test-support/assertions'
import {LoginPage} from '../login/login.po'
import {ProtractorWrapper} from '../../test-support/protractor-wrapper'

describe('Profile page: User', () => {
  let page: UserProfilePage
  let loginPage: LoginPage
  let cleanUp: TestCleanUp
  let assert: TestAssertions
  let ptor: ProtractorWrapper

  beforeAll(() => {
    page = new UserProfilePage()
    loginPage = new LoginPage()
    cleanUp = new TestCleanUp()
    assert = new TestAssertions()
    ptor = new ProtractorWrapper()
  });

  it('can see button with text "Please log in, to access your profile" when not logged in', () => {
    page.navigateTo().then(() => {
      assert.elementIsContainingText(page.pleaseLogInButton, 'Please log in, to access your profile')
      expect(page.userProfileBasicInfo.isPresent()).toBeFalsy();   //TODO
    });
  });

  // it('can fill and save all text fields in profile', () => {
  //   page.navigateTo().then(() => {
  //     loginPage.loginWhenAlreadySignedInToGoogle()
  //   });
  //
  //   let description = 'This is my test description'
  //   let userExpects = 'This is test of what I expect from the app'
  //   let linkedInLink = 'justAText123'
  //
  //   ptor.sendKeys(page.userProfileDescription, description)
  //   ptor.sendKeys(page.userProfileWhatYouExpect, userExpects)
  //   ptor.sendKeys(page.linkedInLinkInput, linkedInLink)
  //
  //   page.saveProfileWithKeyboard()
  //   page.navigateTo().then(() => {
  //     // expect(page.userProfileDescription.getText()).toEqual(description)
  //     // expect(page.userProfileWhatYouExpect.getText()).toEqual(userExpects)
  //     // expect(page.linkedInLinkInput.getText()).toEqual(linkedInLink)
  //   })
  // });

  // afterAll(() => {
  //     cleanUp.cleanUpAfterTests()
  //   },
  // );
});
