import {$, $$, browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from '../../test-support/wait'

export class UserProfilePage {
  userProfileSelector = 'app-user-profile'
  userProfile: ElementFinder = $(this.userProfileSelector)
  pleaseLogInButton: ElementFinder = $(this.userProfileSelector + ' button')
  userProfileBasicInfo: ElementFinder = $('app-user-profile-basic-info')
  saveProfileButton: ElementFinder = $('#saveProfile')
  markedTopicFromSelectList: ElementFinder = $('md-option.mat-active')
  linkedInLinkInput: ElementFinder = $('#linkedinLink input')

  navigateTo(): Promise<any> {
    return browser.get('profile');
  }

  saveProfileWithKeyboard() {
    this.userProfile.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'S'));
  }

  expectTopicTagSelected(tag?: ElementFinder) { // FIXME
    if(tag) {
      return true
    }
    return false
  }

  selectFirstSuggestedTag(element: ElementFinder): Promise<string> {
    element.sendKeys(protractor.Key.ARROW_DOWN);
    let optionSelected = this.markedTopicFromSelectList.getText();
    element.sendKeys(protractor.Key.ENTER);

    return optionSelected;
  }
}

export class HackathonTopicsSelection {
  topicsSelector = '#topicsHackathon';
  topicsInput = $(this.topicsSelector + ' input');

  allSelectedTags(): ElementArrayFinder {
    return $$(this.topicsSelector + ' app-topic-tag span>a');
  }

  inputTopic(topic) {
    this.topicsInput.sendKeys(topic);
  }
}

export class PairProgrammingTopicsSelection {
  private wait: TestWait = new TestWait()

  topicsSelector = '#topicsPairProgramming ';
  topicsInput = $(this.topicsSelector + ' input');

  allSelectedTags(): ElementArrayFinder {
    this.wait.forElement($(this.topicsSelector))
    return $$(this.topicsSelector + ' app-topic-tag span>a');
  }

  inputTopic(topic) {
    this.topicsInput.sendKeys(topic);
  }
}

export class ExchangeTopicsSelection {
  topicsSelector = '#topicsExchange';
  topicsInput = $(this.topicsSelector + ' input');

  allSelectedTags(): ElementArrayFinder {
    return $$(this.topicsSelector + ' app-topic-tag span>a');
  }

  inputTopic(topic) {
    this.topicsInput.sendKeys(topic);
  }
}

