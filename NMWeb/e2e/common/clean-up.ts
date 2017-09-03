import {LoginPage} from '../tests/login/login.po'
import {browser} from 'protractor'

export class TestCleanUp {
  private loginPage = new LoginPage()

  cleanUpAfterTests() {
    this.loginPage.logoutUser()
    this.loginPage.confirmUserLoggedOut()
  }
}
