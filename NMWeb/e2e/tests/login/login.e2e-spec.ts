import {LoginPage} from './login.po'
import {$, browser, ExpectedConditions} from 'protractor'
import {TestCleanUp} from '../../common/clean-up'
import {TestWaits} from '../../common/wait'

describe('LoginPage page: User', () => {
  let page: LoginPage
  let cleanUp: TestCleanUp
  let wait: TestWaits
  let ec = ExpectedConditions

  beforeAll(() => {
    page = new LoginPage()
    cleanUp = new TestCleanUp()
    wait = new TestWaits()
  });

  it('can log in', () => {
    page.navigateTo();
    wait.forElement(page.loginMenuButton).then(() => {
      page.loginMenuButton.click();
      page.logInViaGoogle.click();
      page.logInDefaultTestUser();
    })
  });

  it('stays logged in when returning to the app', () => {
    browser.get('http://www.google.com');
    let googleSearchInput = $('input.gsfi')
    browser.wait(ec.presenceOf(googleSearchInput));
    browser.get('/');
    browser.wait(ec.presenceOf(page.loginMenuButton));

    expect(page.confirmUserLoggedIn()).toBeTruthy();
  });

  it('can logout', () => {
    cleanUp.cleanUpAfterTests()
  });
});
