import {$, $$, browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from '../../test-support/wait'

export class EventsPage {
  private wait = new TestWait()

  readonly eventSelector  = 'app-meeting-list-item[formcontrolname="meeting"]'
  readonly eventItem      = $('md-list-item')

  navigateTo(): Promise<any> {
      return browser.get('meeting-list')
  }
}
