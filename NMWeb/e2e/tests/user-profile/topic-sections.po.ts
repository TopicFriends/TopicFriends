import {TestWait} from '../../test-support/wait'
import {$, $$, browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor'
import {ProtractorWrapper} from '../../test-support/protractor-wrapper'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise

export class TopicsSections {
  private wait = new TestWait()
  private ptor = new ProtractorWrapper()

  readonly hackathonSectionSelector       = 'app-topic-group-card[formcontrolname="hackathon"]'
  readonly pairProgrammingSectionSelector = 'app-topic-group-card[formcontrolname="pairProgramming"]'
  readonly exchangeSectionSelector        = 'app-topic-group-card[formcontrolname="exchange"]'
  readonly tagSelector                    = 'app-topic-tag'
  readonly tagCloseIconSelector           = this.tagSelector + ' i.ion-close-circled'

  assembleTopicInputLocator(topicSectionSelector: string): ElementFinder {
    return $(topicSectionSelector + ' input')
  }

  returnSelectedSectionTags(topicSectionSelector: string): ElementArrayFinder {
    this.wait.forElementPresent($(this.tagSelector))
    return this.returnAllSelectedTopicTags(topicSectionSelector)
  }

  inputTopic(topicSectionSelector: string, topic: string) {
    this.wait.forElementClickable($(topicSectionSelector))
    return this.assembleTopicInputLocator(topicSectionSelector).sendKeys(topic)
  }

  allTagsClosings() {
    return $$(this.tagCloseIconSelector)
  }

  inputMultipleTagsInOneSection(topicsSection: string, topics: Array<string>): Array<string> {
    let selectedTopics: Array<string> = []
    let topicInput = this.assembleTopicInputLocator(topicsSection)
    this.wait.forElementPresent($(topicsSection))

    topics.forEach(topic => {
      this.inputTopic(topicsSection, topic)
      browser.sleep(200)
      this.selectFirstSuggestedTag(topicInput).then(tag => {
        selectedTopics.push(tag)
        topicInput.clear()
      })
    })

    this.wait.forElementCount(this.returnAllSelectedTopicTags(topicsSection), topics.length)

    return selectedTopics
  }

  removeAllTags() {
    return this.wait.forElementPresent($(this.tagSelector)).then(() => {
      browser.sleep(3000)
      this.allTagsClosings().count().then((count) => {
        while (count > 0) {

          this.ptor.click(this.allTagsClosings().first())
          browser.sleep(200)
          count--
        }
      })
    })
  }

  selectFirstSuggestedTag(element: ElementFinder): Promise<string> {
    let markedTopicFromSelectList = $('md-option.mat-active')
    this.wait.forElementClickable(element)
    element.sendKeys(protractor.Key.ARROW_DOWN)
    this.wait.forElementClickable(markedTopicFromSelectList)
    let optionSelected = markedTopicFromSelectList.getText()
    element.sendKeys(protractor.Key.ENTER)

    return optionSelected
  }

  private returnAllSelectedTopicTags(topicSectionSelector: string): ElementArrayFinder {
    return $$(topicSectionSelector + ' ' + this.tagSelector + ' span>a')
  }
}
