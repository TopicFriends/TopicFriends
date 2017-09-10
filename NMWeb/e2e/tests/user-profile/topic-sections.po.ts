import {TestWait} from '../../test-support/wait'
import {UserProfilePage} from './user-profile.po'
import {$, $$, browser, ElementArrayFinder, ElementFinder} from 'protractor'

export class TopicsSections {
  private wait = new TestWait()
  private profilePage = new UserProfilePage()

  readonly hackathonSectionSelector       = 'app-topic-group-card[formcontrolname="hackathon"]'
  readonly pairProgrammingSectionSelector = 'app-topic-group-card[formcontrolname="pairProgramming"]'
  readonly exchangeSectionSelector        = 'app-topic-group-card[formcontrolname="exchange"]'
  readonly tagSelector                    = 'app-topic-tag'
  readonly tagCloseIconSelector           = this.tagSelector + ' i.ion-close-circled'

  assembleTopicInputLocator(topicSectionSelector: string): ElementFinder {
    return $(topicSectionSelector + ' input')
  }

  returnSelectedSectionTags(topicSectionSelector: string): ElementArrayFinder {
    this.wait.forElementPresent($(topicSectionSelector))
    return this.returnAllSelectedTopicTags(topicSectionSelector)
  }

  inputTopic(topicSectionSelector: string, topic: string) {
    return this.assembleTopicInputLocator(topicSectionSelector).sendKeys(topic)
  }

  allTagsClosings() {
    return $$(this.tagCloseIconSelector)
  }

  inputMultipleTagsInOneSection(topicsSection: string, topics: Array<string>): Array<string> {
    let selectedTopics: Array<string> = []
    let topicInput = this.assembleTopicInputLocator(topicsSection)

    topics.forEach(topic => {
      this.inputTopic(topicsSection, topic)
      this.profilePage.selectFirstSuggestedTag(topicInput).then(tag => {
        selectedTopics.push(tag)
      }).then(() => { topicInput.clear() })
    })

    return selectedTopics
  }

  removeAllTags() {
    return this.wait.forElementPresent($(this.tagSelector)).then(() => {
      browser.sleep(3000)
      this.allTagsClosings().count().then((count) => {
        while (count > 0) {

          this.allTagsClosings().first().click()
          browser.sleep(200)
          count--
        }
      })
    })
  }

  private returnAllSelectedTopicTags(topicSectionSelector: string): ElementArrayFinder {
    return $$(topicSectionSelector + ' ' + this.tagSelector + ' span>a')
  }
}
