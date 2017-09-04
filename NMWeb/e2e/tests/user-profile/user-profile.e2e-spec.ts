import {UserProfilePage} from './user-profile.po'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWaits} from '../../test-support/wait'
import {TestAssertions} from '../../test-support/assertions'

fdescribe('Profile page: User', () => {
  let page: UserProfilePage
  let cleanUp: TestCleanUp
  let wait: TestWaits
  let assert: TestAssertions

  beforeAll(() => {
    page = new UserProfilePage()
    cleanUp = new TestCleanUp()
    wait = new TestWaits()
    assert = new TestAssertions()
  });

  it('can see button with text "Please log in, to access your profile" when not logged in', () => {
    page.navigateTo().then(() => {
      assert.elementContainingText(page.pleaseLogInButton, 'Please log in, to access your profile')
      expect(page.userProfileBasicInfo.isPresent()).toBeFalsy();   //TODO
    });
  });

  // it('can enter linkedin profile link', () => {
  //   page.linkedInLinkInput.sendKeys("justAText123");
  //   //currently nothing to assert
  // });
  //
  // it('can save all profile information', () => {
  //
  // });

  // afterAll(() => {
  //     cleanUp.cleanUpAfterTests()
  //   },
  // );
});
