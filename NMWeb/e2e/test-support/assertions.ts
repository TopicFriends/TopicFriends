import {$, browser, ElementArrayFinder, ElementFinder} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from './wait'
import {TopicSections} from '../tests/user-profile/user-profile.po'

export class TestAssertions {
  private wait = new TestWait()
  private topicSections = new TopicSections()

  tagMatch(selectedTopic: Promise<string>, expectedTopic: ElementArrayFinder) {
    expectedTopic.first().getText().then(expected => {
      expect(selectedTopic).toEqual(' ' + expected)
    });
  }

  sectionTagsMatch(topicsSection: string, selectedTopics: Array<string>) {
    this.wait.forElement($(this.topicSections.tagSelector)).then(() => {
      browser.sleep(1000)    //TODO: remove me
      let expectedTopics: ElementArrayFinder = this.topicSections.returnSelectedSectionTags(topicsSection)
      this.allTopicsToMatch(selectedTopics, expectedTopics)
    })
  }

  elementIsContainingText(element: ElementFinder, text: string) {
    expect(element.getText()).toEqual(text)
  }

  private allTopicsToMatch(selectedTopics: Array<string>, expectedTopics: ElementArrayFinder) {
    expectedTopics.then((expTopics: ElementFinder[]) => {
      expect(selectedTopics.length).toEqual(expTopics.length)

      expTopics.forEach(topicPromise => {
        topicPromise.getText().then(topic => {
          expect(selectedTopics.indexOf(' ' + topic) > -1).toBeTruthy()
        })
      })
    })
  }
}
