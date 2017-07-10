import { Login } from './login.po';
import {browser} from 'protractor';
// import { AngularFireAuth } from 'angularfire2/auth';
browser.waitForAngularEnabled(false);

fdescribe('User', () => {
  let page: Login;

  beforeAll(() => {
    page = new Login();
  });

  it('should be able to log in', () => {
    page.navigateTo();
    var success = page.signInDefaultTestUser();
    expect(success).toBeTruthy();
  });

  it('name should be displayed', () => {    //should be fetched from google

  });
});
