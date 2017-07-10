import { Login } from './login.po';
import {browser} from 'protractor';
// import { AngularFireAuth } from 'angularfire2/auth';

fdescribe('User', () => {
  let page: Login;

  beforeEach(() => {
    page = new Login();
  });

  it('should be able to log in', () => {
    page.navigateTo();
    browser.sleep(20000).then(() => {
    }
    );// user info is inside auth object);
  });
});
