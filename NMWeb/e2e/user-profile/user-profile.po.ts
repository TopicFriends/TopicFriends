import {$, $$, browser, ElementFinder, ExpectedConditions, protractor} from 'protractor';

export class UserProfilePage {
  userProfileSelector = 'app-user-profile';
  userProfile: ElementFinder = $(this.userProfileSelector);
  saveProfileButton = $('#saveProfile');
  pleaseLogInButtonSelector = this.userProfileSelector + ' button';

  linkedInLinkInput = $('#linkedinLink input');

  private ec = ExpectedConditions;

  navigateTo() {
    return browser.get('profile');
  }

  saveProfileWithKeyboard() {
    this.userProfile.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'S'));
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

