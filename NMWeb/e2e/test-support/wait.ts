import {browser, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor'

export class TestWait {
  ec = ExpectedConditions
  defaultWaitTimeout = Math.floor(browser.params.allScriptsTimeout/3)

  forElementPresent(element: ElementFinder): any {
    return browser.wait((this.ec.presenceOf(element)),
      this.defaultWaitTimeout, 'false')
  }

  forElementNotPresent(element: ElementFinder): any {
    return browser.wait(this.ec.not(this.ec.presenceOf(element)),
      this.defaultWaitTimeout, 'false')
  }

  forElementCount(elementArray: ElementArrayFinder, expectedCount: number): any {
    return browser.wait(() =>
      elementArray.count().then((actualCount) => {
        return expectedCount === actualCount
      }), this.defaultWaitTimeout, 'false')
  }

  forElementClickable(element: ElementFinder) {
    return browser.wait(this.ec.elementToBeClickable(element),
      this.defaultWaitTimeout, 'false')
  }

  forElementText(element: ElementFinder, text: string): any {
    return browser.wait(this.ec.textToBePresentInElement(element, text),
      this.defaultWaitTimeout, 'false')
  }

  forElementWithoutText(element: ElementFinder, text: string): any {
    return browser.wait(this.ec.not(this.ec.textToBePresentInElement(element, text)),
      this.defaultWaitTimeout, 'false')
  }

  forTextPresent(element: ElementFinder, text: string): any {
    return this.forElementText(element, text)
  }
}
