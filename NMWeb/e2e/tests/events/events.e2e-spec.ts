import {LoginPage} from '../login/login.po'
import {EventsPage} from './events.po'
import {$$} from 'protractor'
import {TestWait} from '../../test-support/wait'
import {TestAssertions} from '../../test-support/assertions'

describe('Events: User', () => {
  let page: EventsPage
  let loginPage: LoginPage
  let wait: TestWait
  let assert: TestAssertions

  beforeAll(() => {
    page = new EventsPage()
    loginPage = new LoginPage()
    wait = new TestWait()
    assert = new TestAssertions()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  });

  it('can see events list with at least one event', () => {
    page.navigateTo().then(() => {
      wait.forElementPresent(page.eventItem)
      expect($$(page.eventSelector).count()).toBeGreaterThanOrEqual(1)
    })
  })

  // it('can RSVP to an event', () => {
  //   let button = page.goingButtonInList
  //   wait.forElementText(button, 'Are you going').then(() => {
  //     button.click()
  //     wait.forElementText(button, 'I\'m going')
  //   })
  //
  //   page.navigateTo().then(() => {
  //     expect(wait.forElementText(button, 'I\'m going')).toBeTruthy()
  //   })
  // })

  // it('can unRSVP to an event', () => {
  //   // let button = page.goingButtonInList
  //   // wait.forElementText(button, 'I\'m going')
  //   // button.click()
  //   // wait.forElementText(button, 'I\'m not going')
  //   //
  //   // page.navigateTo().then(() => {
  //   //   wait.forElementPresent(button)
  //   //   wait.forElementWithoutText(button, 'Loading...')
  //   //   expect(button.getText()).toContain('I\'m not going')
  //   // })
  // })

  // it('can see event details when clicks "Details" button', () => {
  //
  // })
  //
  // it('can see event details when clicks event title', () => {
  //
  // })
  //
  // it('can RSVP to an event on meeting details page', () => {
  //
  // })
  //
  // it('can unRSVP to an event on meeting details page', () => {
  //
  // })
});
