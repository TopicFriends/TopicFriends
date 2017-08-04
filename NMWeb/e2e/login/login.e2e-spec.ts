import { LoginPage } from './login.po';
import {$, browser, ExpectedConditions} from 'protractor';
import {CommonUtils} from '../common-utils';

browser.waitForAngularEnabled(false);

describe('LoginPage page: User', () => {
  let page: LoginPage;
  let ec = ExpectedConditions;
  let utils = new CommonUtils();

  beforeAll(() => {
    page = new LoginPage();
  });

  it('can log in', (done) => {
    page.navigateTo();
    browser.wait(ec.presenceOf(page.loginButton)).then(() => {
      var isUserSignedIn = page.logInDefaultTestUser(done);
      expect(isUserSignedIn).toBeTruthy();
    })
  });

  it('stays logged in when returning to the app', (done) => {
    browser.get('http://www.google.com');
    browser.wait(ec.presenceOf($('input.gsfi')));   //google search page
    browser.get('/');
    browser.wait(ec.presenceOf(page.loginButton));

    expect(page.confirmUserLoggedIn(done)).toBeTruthy();
  });

  it('can logout', () => {
    page.logoutUser();
    expect(page.confirmUserLoggedOut()).toBeTruthy();
  });
});
