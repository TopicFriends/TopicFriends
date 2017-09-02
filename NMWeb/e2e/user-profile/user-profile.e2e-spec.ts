import {UserProfilePage} from './user-profile.po';
import {browser, by, element, ExpectedConditions} from 'protractor';
import {LoginPage} from '../login/login.po';

browser.waitForAngularEnabled(false);

describe('Profile page: User', () => {
  let page: UserProfilePage;
  let loginPage: LoginPage;
  let ec = ExpectedConditions;

  beforeAll(() => {
    page = new UserProfilePage();
  });

  it('can see button with text "Please log in, to access your profile" when not logged in', () => {
    page.navigateTo();

    browser.wait(ec.presenceOf(page.userProfile)).then(() => {
      expect(
        element(by.cssContainingText(page.pleaseLogInButtonSelector,
          'Please log in, to access your profile')).isPresent())
        .toBeTruthy();
      expect(page.userProfile.isPresent()).toBeFalsy();
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
    loginPage.logoutUser();
    }
  );
});
