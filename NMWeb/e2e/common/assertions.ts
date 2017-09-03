import {ElementArrayFinder} from 'protractor'
import {promise} from 'selenium-webdriver'

export class TestAssertions {
  expectTopicsToMatch(expectedTopic: ElementArrayFinder, selectedTopic: promise.Promise<string>) {
    expectedTopic.first().getText().then(expected => {
      expect(selectedTopic).toEqual(' ' + expected);
    });
  }
}
