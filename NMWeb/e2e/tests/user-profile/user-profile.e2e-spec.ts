import {UserProfilePage} from './user-profile.po'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestAssertions} from '../../test-support/assertions'

describe('Profile page: User', () => {
  let page: UserProfilePage
  let cleanUp: TestCleanUp
  let assert: TestAssertions

  beforeAll(() => {
    page = new UserProfilePage()
    cleanUp = new TestCleanUp()
    assert = new TestAssertions()
  });

  it('can see button with text "Please log in, to access your profile" when not logged in', () => {
    page.navigateTo().then(() => {
      assert.elementIsContainingText(page.pleaseLogInButton, 'Please log in, to access your profile')
      expect(page.userProfileBasicInfo.isPresent()).toBeFalsy();   //TODO
    });
  });

  // it('can enter linkedin profile link', () => {
  //   page.linkedInLinkInput.sendKeys("justAText123");
  //   //currently nothing to assert
  // });
  //
  // it('can save all profile information', () => {
  // fill in everything, build array with all the selected and filled in information and check one by one $$.each with i++?
  //
  // });

  // afterAll(() => {
  //     cleanUp.cleanUpAfterTests()
  //   },
  // );
});
