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
    browser.wait(ec.presenceOf(page.loginMenuButton)).then(() => {
      let isUserSignedIn = page.logInDefaultTestUser(done);
      expect(isUserSignedIn).toBeTruthy();
    })
  });

  it('stays logged in when returning to the app', (done) => {
    browser.get('http://www.google.com');
    let googleSearchInput = $('input.gsfi')
    browser.wait(ec.presenceOf(googleSearchInput));
    browser.get('/');
    browser.wait(ec.presenceOf(page.loginMenuButton));

    expect(page.confirmUserLoggedIn(done)).toBeTruthy();
  });

  it('can logout', () => {
    page.logoutUser();
    page.confirmUserLoggedOut();
  });
});
