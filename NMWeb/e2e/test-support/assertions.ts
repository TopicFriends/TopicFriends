import {$, ElementArrayFinder, ElementFinder} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from './wait'
import {TopicsSections} from '../tests/user-profile/topic-sections.po'

export class TestAssertions
{
  private wait = new TestWait()
  private topicSections = new TopicsSections()

  tagsMatch(selectedTopic: Promise<string>, expectedTopic: ElementArrayFinder) {
    let topics = []
    selectedTopic.then(topic => {
      topics.push(topic)
      this.allTopicsToMatch(topics, expectedTopic)
    })
  }

  sectionTagsMatch(topicsSection: string, selectedTopics: Array<string>) {
    this.wait.forElementPresent($(this.topicSections.tagCloseIconSelector)).then(() => {
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
      // console.log(selectedTopics.length, expTopics.length)

      expTopics.forEach(topicPromise => {
        topicPromise.getText().then(topic => {
          expect(selectedTopics.indexOf(' ' + topic) > -1).toBeTruthy()
        })
      })
    })
  }
}
