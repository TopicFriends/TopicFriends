import {browser, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor'

export class TestWaits {
  ec = ExpectedConditions
  defaultWaitTimeout = 10000

  forElement(element: ElementFinder) {
    return browser.wait((this.ec.presenceOf(element)), this.defaultWaitTimeout, 'false')
  }

  forElementNotPresent(element: ElementFinder) {
    return browser.wait(this.ec.not(this.ec.presenceOf(element)))
  }

  forElementCount(elementArray: ElementArrayFinder, expectedCount: number) {
    return browser.wait(() =>
      elementArray.count().then((actualCount) => {
        return expectedCount === actualCount;
      }));
  }

  forTextPresent(element: ElementFinder, text: string) {
    return this.forElementText(element, text);
  }

  forElementText(element: ElementFinder, text: string) {
    return browser.wait(this.ec.textToBePresentInElement(element, text));
  }
}
