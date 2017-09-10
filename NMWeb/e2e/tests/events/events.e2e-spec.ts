import {LoginPage} from '../login/login.po'
import {EventsPage} from './events.po'
import {$$} from 'protractor'
import {TestWait} from '../../test-support/wait'

describe('Events: User', () => {
  let page: EventsPage
  let loginPage: LoginPage
  let wait: TestWait

  beforeAll(() => {
    page = new EventsPage()
    loginPage = new LoginPage()
    wait = new TestWait()

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
  //
  // })
  //
  // it('can unRSVP to an event', () => {
  //
  // })
  //
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
