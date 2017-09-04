import {$, $$, browser, ElementArrayFinder, ElementFinder, protractor} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise

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
  topicsSelector = '#topicsPairProgramming ';
  topicsInput = $(this.topicsSelector + ' input');

  allSelectedTags(): ElementArrayFinder {
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

