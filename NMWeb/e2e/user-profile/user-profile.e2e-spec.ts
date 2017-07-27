import {UserProfile} from './user-profile.po';
import {$, browser, by, element, ExpectedConditions, protractor} from 'protractor';
import {CommonUtils} from '../common-utils';
import {Login} from '../login/login.po';
import {isSuccess} from '@angular/http/src/http_utils';

browser.waitForAngularEnabled(false);

describe('Profile page: User', () => {
  let page: UserProfile;
  let loginPage: Login;
  let ec = ExpectedConditions;
  let utils = new CommonUtils();
  let defaultTimeout = 5000;

  beforeAll(() => {
    page = new UserProfile();
    loginPage = new Login();
  });

  it('can see text "Please log in, to access your profile" when not logged in', () => {
    page.navigateTo();

    browser.wait(ec.presenceOf(page.userProfile)).then(() => {
      expect(
        element(by.cssContainingText(page.userProfileSelector,
          'Please log in, to access your profile')).isPresent())
        .toBeTruthy();
      expect(page.profileForm.isPresent()).toBeFalsy();
    });
  });

  // it('can fill in profile with autocomplete by keyboard', (done) => {
  //   browser.sleep(3000);
  //   loginPage.logInDefaultTestUser(done);
  //   browser.wait(ec.presenceOf(page.profileForm), defaultTimeout);
  //
  //   page.topicsExchange.sendKeys('Ion');
  //   page.topicsExchange.sendKeys(protractor.Key.ARROW_DOWN);
  //   page.topicsExchange.sendKeys(protractor.Key.ENTER);
  //   browser.sleep(5000);
  //   //expect().toBeTruthy();
  // });

  // it('can fill in profile with autocomplete by keyboard', (done) => {
  //   browser.wait(ec.presenceOf(page.profileForm), defaultTimeout);
  //
  //   page.topicsExchange.sendKeys('Kar');
  //   page.topicsExchange.sendKeys(protractor.Key.ENTER)
  //
  //   //expect().toBeTruthy();
  // });
  //
  // it('can enter first topic from list by pressing ENTER, one option on the list', (done) => {
  //   browser.wait(ec.presenceOf(page.profileForm), defaultTimeout);
  //
  //   page.topicsExchange.sendKeys('K');
  //   page.topicsExchange.sendKeys(protractor.Key.ENTER)
  //   //expect(first topic added is Karma).toBeTruthy();
  // });
  //
  // it('can enter first topic from list by pressing ENTER, multiple options on the list', (done) => {
  //   browser.wait(ec.presenceOf(page.profileForm), defaultTimeout);
  //
  //   page.topicsExchange.sendKeys('A');
  //   page.topicsExchange.sendKeys(protractor.Key.ENTER)
  //   //expect(second topic added is android?).toBeTruthy();
  // });
  //
  // it('can enter linkedin profile link', () => {
  //   page.linkedInLink.sendKeys("justAText123");
  //   //currently nothing to assert
  // });
  //
  // it('can save all profile information', () => {
  //
  // });
});
