import {$$, ElementArrayFinder, ElementFinder} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from './wait'
import {TopicsSections} from '../tests/user-profile/topic-sections.po'
import {TestSupport} from './test-support'

export class TestAssertions
{
  private wait = new TestWait()
  private support = new TestSupport()
  private topicSections = new TopicsSections()

  tagsMatch(selectedTopic: Promise<string>, expectedTopic: ElementArrayFinder) {
    let topics = []
    selectedTopic.then(topic => {
      topics.push(topic)
      this.allTopicsToMatch(topics, expectedTopic)
    })
  }

  sectionTagsMatch(topicsSection: string, selectedTopics: Array<string>) {
    let tagClosings = $$(this.topicSections.tagCloseIconSelector)

    this.wait.forElementCount(tagClosings, selectedTopics.length).then(() => {
      let expectedTopics: ElementArrayFinder = this.topicSections.returnSelectedSectionTags(topicsSection)
      console.log('section: ' + topicsSection)
      this.allTopicsToMatch(selectedTopics, expectedTopics)
    })
  }

  elementIsContainingText(element: ElementFinder, text: string) {
    expect(element.getText()).toEqual(text, 'Element doesn\'t contain text: ' + text)
  }

  private allTopicsToMatch(selectedTopics: Array<string>, expectedTopics: ElementArrayFinder) {
    // for(let i=0; i<selectedTopics.length; i++) {
    //   console.log('Selected topic:' + selectedTopics[i])
    // }

    expectedTopics.then((expTopics: ElementFinder[]) => {
      let selectedTopicsCount = selectedTopics.length
      let expectedTopicsCount = expTopics.length
      expect(selectedTopicsCount).toBe(expectedTopicsCount,
        'Failed: ' + selectedTopicsCount + ' topics selected but ' + expectedTopicsCount + ' topics expected')

      expTopics.forEach(topicPromise => {
        topicPromise.getText().then(topic => {
          console.log('Expected Topic: ' + topic)
          // this.support.takeScreenshot('topic_' + topic)
          expect(selectedTopics.indexOf(' ' + topic) > -1).toBe(true,
            'Expected topic \'' + topic + '\' wasn\'t found in tags')
        })
      })
    })
  }
}
