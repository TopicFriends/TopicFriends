import {ElementFinder} from 'protractor'
import {TestWait} from './wait'

export class ProtractorWrapper {
  private wait = new TestWait()

  click(element: ElementFinder) {
    if(this.wait.forElementClickable(element))
    {
      element.click()
    }
  }

  sendKeys(inputElement: ElementFinder, text: string) {
    this.wait.forElementPresent(inputElement)
    inputElement.clear()
    inputElement.sendKeys(text)
  }
}
