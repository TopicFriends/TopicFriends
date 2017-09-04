import {ElementArrayFinder, ElementFinder} from 'protractor'
import {promise} from 'selenium-webdriver'

export class TestAssertions {
  topicsToMatch(expectedTopic: ElementArrayFinder, selectedTopic: promise.Promise<string>) {
    expectedTopic.first().getText().then(expected => {
      expect(selectedTopic).toEqual(' ' + expected);
    });
  }

  elementContainingText(element: ElementFinder, text: string) {
    expect(element.getText()).toEqual(text)
  }
}
