import {UserProfilePage} from './user-profile.po'
import {by, element} from 'protractor'
import {TestCleanUp} from '../../common/clean-up'
import {TestWaits} from '../../common/wait'
import {LoginPage} from '../login/login.po'

describe('Profile page: User', () => {
  let page: UserProfilePage
  let login: LoginPage
  let cleanUp: TestCleanUp
  let wait: TestWaits

  beforeAll(() => {
    page = new UserProfilePage()
    login = new LoginPage()
    cleanUp = new TestCleanUp()
    wait = new TestWaits()
  });

  it('can see button with text "Please log in, to access your profile" when not logged in', () => {
    page.navigateTo();

    wait.forElement(login.loginMenuButton).then(() => {
      expect(
        element(by.cssContainingText(page.pleaseLogInButtonSelector,
          'Please log in, to access your profile')).isPresent())
        .toBeTruthy();
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

  afterAll(() => {
      cleanUp.cleanUpAfterTests()
    },
  );
});
