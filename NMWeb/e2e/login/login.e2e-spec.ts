import { Login } from './login.po';
import {$, browser, ExpectedConditions} from 'protractor';
// import { AngularFireAuth } from 'angularfire2/auth';
browser.waitForAngularEnabled(false);

fdescribe('User', () => {
  let page: Login;
  let ec = ExpectedConditions;

  beforeAll(() => {
    page = new Login();
  });

  it('should be able to log in', () => {
    page.navigateTo();
    browser.wait(ec.presenceOf(page.loginButton));
    var isUserSignedIn = page.signInDefaultTestUser();
    expect(isUserSignedIn).toBeTruthy();
  });

  // it('name should be displayed', () => {    //should be fetched from google
  //
  // });
  //
  // it('should automatically login user when visiting again', () => {
  //   // browser.get('http://www.google.com');
  //   // browser.wait(ec.presenceOf($('input.gsfi')));
  //   // browser.get('/');
  //   // browser.wait(ec.presenceOf(page.loginButton));
  //   //
  //   // expect(page.confirmUserLoggedIn()).toBeTruthy();
  //   // //TODO: check if user is logged in by checking the button text: People Matcher
  // })
});
