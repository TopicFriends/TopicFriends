import {browser, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor'

export class TestWaits {
  ec = ExpectedConditions
  defaultWaitTimeout = browser.params.allScriptsTimeout - 5000

  forElement(element: ElementFinder) {
    return browser.wait((this.ec.presenceOf(element)), this.defaultWaitTimeout, 'false')
  }

  forElementNotPresent(element: ElementFinder): any {
    return browser.wait(this.ec.not(this.ec.presenceOf(element)))
  }

  forElementCount(elementArray: ElementArrayFinder, expectedCount: number): any {
    return browser.wait(() =>
      elementArray.count().then((actualCount) => {
        return expectedCount === actualCount;
      }));
  }

  forElementText(element: ElementFinder, text: string): any {
    return browser.wait(this.ec.textToBePresentInElement(element, text));
  }

  forTextPresent(element: ElementFinder, text: string): any {
    return this.forElementText(element, text);
  }
}
