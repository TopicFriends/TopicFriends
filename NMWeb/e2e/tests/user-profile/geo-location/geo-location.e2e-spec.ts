import {GeoLocationSection} from './geo-location.po'
import {TestWait} from '../../../test-support/wait'
import {UserProfilePage} from '../user-profile.po'
import {LoginPage} from '../../login/login.po'
import {TestAssertions} from '../../../test-support/assertions'
import {ProtractorWrapper} from '../../../test-support/protractor-wrapper'

describe('Geo-location: User', () => {
  let page: GeoLocationSection
  let wait: TestWait
  let profilePage: UserProfilePage
  let loginPage: LoginPage
  let assert: TestAssertions
  let ptor: ProtractorWrapper

  beforeAll(() => {
    page = new GeoLocationSection()
    wait = new TestWait()
    profilePage = new UserProfilePage()
    loginPage = new LoginPage()
    assert = new TestAssertions()
    ptor = new ProtractorWrapper()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  })

  it('can pick a point on a map for: Where I live', () => {
    page.navigateTo()

    page.selectPlaceOnMap(page.whereILivePick)
    ptor.click(profilePage.saveProfileButton)

    page.navigateTo()
  })

  // it('can pick a point on a map for: Where I work', () => {
  //   page.navigateTo()
  //
  //   expect(false).toBeTruthy()
  // })
  //
  // it('can pick a point on a map for: Where I study', () => {
  //   page.navigateTo()
  //
  //   expect(false).toBeTruthy()
  // })
  //
  // it('can pick a point on a map for: Where I studied', () => {
  //   page.navigateTo()
  //
  //   expect(false).toBeTruthy()
  // })
  //
  // it('can pick a point on a map for: Where I visit', () => {
  //   page.navigateTo()
  //
  //   expect(false).toBeTruthy()
  // })
  //
  // it('can pick a point on a map for: Hometown', () => {
  //   page.navigateTo()
  //
  //   expect(false).toBeTruthy()
  // })
  //
  // it('can update point on a map', () => {
  //   page.navigateTo()
  //
  //   expect(false).toBeTruthy()
  // })
})
