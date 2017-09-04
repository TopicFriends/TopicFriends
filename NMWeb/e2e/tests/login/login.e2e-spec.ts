import {LoginPage} from './login.po'
import {browser} from 'protractor'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWait} from '../../test-support/wait'

describe('LoginPage page: User', () => {
  let page: LoginPage
  let cleanUp: TestCleanUp
  let wait: TestWait

  beforeAll(() => {
    page = new LoginPage()
    cleanUp = new TestCleanUp()
    wait = new TestWait()
  });

  it('can log in', () => {
    page.navigateTo()
    wait.forElement(page.loginMenuButton).then(() => {
      page.loginMenuButton.click()
      page.logInViaGoogle.click()
      page.logInDefaultTestUser()
    })
  });

  it('stays logged in when returning to the app', () => {
    browser.get('http://www.google.com')
    wait.forElement(page.googleSearchInput)
    page.navigateTo()
    wait.forElement(page.loginMenuButton)

    expect(page.confirmUserLoggedIn()).toBeTruthy()
  });

  it('can logout', () => {
    cleanUp.cleanUpAfterTests()
  });
});
