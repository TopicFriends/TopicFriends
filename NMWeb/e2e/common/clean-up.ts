import {LoginPage} from '../tests/login/login.po'

export class TestCleanUp {
  private loginPage = new LoginPage()

  cleanUpAfterTests() {
    this.loginPage.logoutUser()
    this.loginPage.confirmUserLoggedOut()
  }
}
