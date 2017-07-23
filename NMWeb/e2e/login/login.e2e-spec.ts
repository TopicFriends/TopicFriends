import { Login } from './login.po';
import {$, browser, ExpectedConditions} from 'protractor';
import {CommonUtils} from '../common-utils';

browser.waitForAngularEnabled(false);

fdescribe('Login page: User', () => {
  let page: Login;
  let ec = ExpectedConditions;
  let utils = new CommonUtils();

  beforeAll(() => {
    page = new Login();
  });

  it('should be able to log in', (done) => {
    page.navigateTo();
    browser.wait(ec.presenceOf(page.loginButton)).then(() => {
      var isUserSignedIn = page.logInDefaultTestUser(done);
      expect(isUserSignedIn).toBeTruthy();
    })
  });

  it('should be logged in when returning to the app', (done) => {
    browser.get('http://www.google.com');
    browser.wait(ec.presenceOf($('input.gsfi')));   //google search page
    browser.get('/');
    browser.wait(ec.presenceOf(page.loginButton));

    expect(page.confirmUserLoggedIn(done)).toBeTruthy();
  });

  it('should be able to logout', () => {
    page.logoutUser();
    expect(page.confirmUserLoggedOut()).toBeTruthy();
  });
});
