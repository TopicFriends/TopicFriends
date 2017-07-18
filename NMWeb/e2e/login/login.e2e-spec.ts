import { Login } from './login.po';
import {$, browser, ExpectedConditions} from 'protractor';
import {CommonUtils} from '../common-utils';

browser.waitForAngularEnabled(false);

fdescribe('User', () => {
  let page: Login;
  let ec = ExpectedConditions;
  let utils = new CommonUtils();

  beforeAll(() => {
    page = new Login();
  });

  it('should be able to log in', (done) => {
    page.navigateTo();
    browser.wait(ec.presenceOf(page.loginButton)).then(() => {
      var isUserSignedIn = page.signInDefaultTestUser(done);
      expect(isUserSignedIn).toBeTruthy();
    })
  });

  it('should be logged in when returning to the app', (done) => {
    browser.get('http://www.google.com');
    browser.wait(ec.presenceOf($('input.gsfi')));
    browser.get('/');
    browser.wait(ec.presenceOf(page.loginButton));

    expect(page.confirmUserLoggedIn(done)).toBeTruthy();
    utils.takeScreenshot('Login');
  });

  it('should be able to logout', () => {
    page.logoutUser();
    expect(page.confirmUserLoggedOut()).toBeTruthy();
  });
});
