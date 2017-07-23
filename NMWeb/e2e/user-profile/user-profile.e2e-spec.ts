import {UserProfile} from './user-profile.po';
import {browser, by, element, ExpectedConditions} from 'protractor';
import {CommonUtils} from '../common-utils';
import {Login} from '../login/login.po';
import {isSuccess} from '@angular/http/src/http_utils';

browser.waitForAngularEnabled(false);

fdescribe('Profile page: User', () => {
  let page: UserProfile;
  let loginPage: Login;
  let ec = ExpectedConditions;
  let utils = new CommonUtils();
  let defaultTimeout = 5000;

  beforeAll(() => {
    page = new UserProfile();
    loginPage = new Login();
  });

  it('should see text "Please log in, to access your profile" when not logged in', () => {
    page.navigateTo();

    expect(
      element(by.cssContainingText('app-user-profile',
        'Please log in, to access your profile')).isPresent())
      .toBeTruthy();
    expect(page.profileForm.isPresent()).toBeFalsy();
  });

  // it('should be able to fill in profile with autocomplete', (done) => {
  //   page.navigateTo();
  //   loginPage.logInDefaultTestUser(done);
  //   browser.wait(ec.presenceOf(page.profileForm), defaultTimeout);
  //
  //   page.topicsExchange.sendKeys('Ion');
  //   // expect().toBeTruthy();
  // });
});
