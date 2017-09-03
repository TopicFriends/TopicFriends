import {$, $$, browser, ElementFinder, protractor} from 'protractor'

export class UserProfilePage {
  userProfileSelector = 'app-user-profile'
  userProfile: ElementFinder = $(this.userProfileSelector)
  pleaseLogInButtonSelector = this.userProfileSelector + ' button'
  userProfileBasicInfo: ElementFinder = $('app-user-profile-basic-info')
  saveProfileButton: ElementFinder = $('#saveProfile')
  markedTopicFromSelectList: ElementFinder = $('md-option.mat-active')
  linkedInLinkInput: ElementFinder = $('#linkedinLink input')

  navigateTo() {
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

  allSelectedTags() {
    return $$(this.topicsSelector + ' app-topic-tag span>a');
  }

  inputTopic(topic) {
    this.topicsInput.sendKeys(topic);
  }
}

export class PairProgrammingTopicsSelection {
  topicsSelector = '#topicsPairProgramming ';
  topicsInput = $(this.topicsSelector + ' input');

  allSelectedTags() {
    return $$(this.topicsSelector + ' app-topic-tag span>a');
  }

  inputTopic(topic) {
    this.topicsInput.sendKeys(topic);
  }
}

export class ExchangeTopicsSelection {
  topicsSelector = '#topicsExchange';
  topicsInput = $(this.topicsSelector + ' input');

  allSelectedTags() {
    return $$(this.topicsSelector + ' app-topic-tag span>a');
  }

  inputTopic(topic) {
    this.topicsInput.sendKeys(topic);
  }
}

