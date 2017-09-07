import {$, $$, browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from '../../test-support/wait'

export class UserProfilePage {
  private wait: TestWait = new TestWait()

  userProfileSelector = 'app-user-profile'
  userProfile: ElementFinder = $(this.userProfileSelector)
  userProfileBasicInfo: ElementFinder = $('app-user-profile-basic-info')
  userProfileDescription = $('textarea[formControlName="description"]')
  whatUserExpects = $('textarea[formControlName="whatDoYouExpectFromTheApp"]')

  pleaseLogInButton: ElementFinder = $(this.userProfileSelector + ' button')
  saveProfileButton: ElementFinder = $('#saveProfile')

  linkedInLinkInput: ElementFinder = $('#linkedinLink input')

  //TOPICS
  markedTopicFromSelectList: ElementFinder = $('md-option.mat-active')
    // add supply/demand
  //ENDOF: TOPICS

  // GEOLOCATION
  whereILive = $('textarea[formControlName="whereILive"]')
  whereIWork = $('textarea[formControlName="whereIWork"]')
  whereIStudy = $('textarea[formControlName="whereIStudy"]')
    //pick (for each)
    //clear (for each)
  // ENDOF: GEOLOCATION

  navigateTo(): Promise<any> {
    return browser.get('profile')
  }

  saveProfileWithKeyboard() {
    this.userProfile.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'S'))
  }

  expectTopicTagSelected(tag?: ElementFinder) { // FIXME
    if(tag) {
      return true
    }
    return false
  }

  selectFirstSuggestedTag(element: ElementFinder): Promise<string> {
    this.wait.forElement(element)
    element.sendKeys(protractor.Key.ARROW_DOWN)
    let optionSelected = this.markedTopicFromSelectList.getText()
    element.sendKeys(protractor.Key.ENTER)

    return optionSelected
  }
}

export class TopicsSelection {
// export class HackathonTopicsSelection {
  private wait: TestWait = new TestWait()

  hackathonTopicsSelector = 'app-topic-group-card[formcontrolname="hackathon"]'
  pairProgrammingSelector = 'app-topic-group-card[formcontrolname="pairProgramming"]'
  exchangeSelector = 'app-topic-group-card[formcontrolname="exchange"]'

  assembleTopicInputLocator(topicSelector: string) {
    return $(topicSelector + ' input')
  }

  allSelectedTags(topicSelector: string): ElementArrayFinder {
    this.wait.forElement($(topicSelector))
    return this.catchAllTopicTagsSelected(topicSelector)
  }

  inputTopic(topicSelector: string, topic: string) {
    this.assembleTopicInputLocator(topicSelector).sendKeys(topic)
  }

  private catchAllTopicTagsSelected(topicSelector: string) {
    return $$(topicSelector + ' app-topic-tag span>a')
  }
}
