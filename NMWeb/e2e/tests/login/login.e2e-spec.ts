import {LoginPage} from './login.po'
import {browser} from 'protractor'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWait} from '../../test-support/wait'
import {ProtractorWrapper} from '../../test-support/protractor-wrapper'

describe('Login page: User', () => {
  let page: LoginPage
  let cleanUp: TestCleanUp
  let wait: TestWait
  let ptor: ProtractorWrapper

  beforeAll(() => {
    page = new LoginPage()
    cleanUp = new TestCleanUp()
    wait = new TestWait()
    ptor = new ProtractorWrapper()
  });

  it('can log in', () => {
    page.navigateTo()
    ptor.click(page.loginMenuButton)
    ptor.click(page.logInViaGoogle)
    page.logInDefaultTestUser()
  });

  it('stays logged in when returning to the app', () => {
    browser.get('http://www.google.com')
    wait.forElementPresent(page.googleSearchInput)
    page.navigateTo()
    wait.forElementPresent(page.loginMenuButton)

    expect(page.confirmUserLoggedIn()).toBeTruthy(
      'User not logged in')
  });

  it('can logout', () => {
    cleanUp.cleanUpAfterTests()
  });
});
