import {browser, ElementFinder, ExpectedConditions} from 'protractor'

export class TestWaits {
  ec = ExpectedConditions
  defaultWaitTimeout = 10000

  forElement(element: ElementFinder) {
    return browser.wait((this.ec.presenceOf(element)), this.defaultWaitTimeout, 'false')
  }

  forElementNotPresent(element: ElementFinder) {
    return browser.wait(this.ec.not(this.ec.presenceOf(element)))
  }
}
