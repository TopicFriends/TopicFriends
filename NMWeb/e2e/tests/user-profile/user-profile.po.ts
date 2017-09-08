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
    element.sendKeys(protractor.Key.ARROW_DOWN)
    let optionSelected = this.markedTopicFromSelectList.getText()
    element.sendKeys(protractor.Key.ENTER)

    return optionSelected
  }
}

export class TopicSections {
  private wait = new TestWait()
  private profilePage = new UserProfilePage()

  readonly hackathonSectionSelector       = 'app-topic-group-card[formcontrolname="hackathon"]'
  readonly pairProgrammingSectionSelector = 'app-topic-group-card[formcontrolname="pairProgramming"]'
  readonly exchangeSectionSelector        = 'app-topic-group-card[formcontrolname="exchange"]'
  readonly tagSelector                    = 'app-topic-tag'
  readonly allTagsCloseIconSelector       = this.tagSelector + ' i.ion-close-circled'

  assembleTopicInputLocator(topicSectionSelector: string): ElementFinder {
    return $(topicSectionSelector + ' input')
  }

  returnSelectedSectionTags(topicSectionSelector: string): ElementArrayFinder {
    this.wait.forElement($(topicSectionSelector))
    return this.returnAllSelectedTopicTags(topicSectionSelector)
  }

  inputTopic(topicSectionSelector: string, topic: string) {
    this.assembleTopicInputLocator(topicSectionSelector).sendKeys(topic)
  }

  allTagsClosings() {
    return $$(this.allTagsCloseIconSelector)
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
    this.allTagsClosings().count().then((count) => {
      let i = count;
      while (i >= 0) {
        this.allTagsClosings().first().click()
        browser.sleep(100)
        i--;
      }
    });
  }

  private returnAllSelectedTopicTags(topicSectionSelector: string): ElementArrayFinder {
   return $$(topicSectionSelector + ' ' + this.tagSelector + ' span>a')
  }
}
