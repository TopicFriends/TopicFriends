import {$, browser, by, element, ExpectedConditions} from 'protractor';

export class UserProfilePage {
  saveProfileButton = $('#saveProfile');   //by click and by ENTER
  userProfileSelector = 'app-user-profile';
  userProfile = $(this.userProfileSelector);
  pleaseLogInButtonSelector = this.userProfileSelector + ' button';

  linkedInLink = $('#linkedinLink input');
  profileForm = $('form');
  topicsExchange = $('#topicsExchange input');
  topicsHackathon = $('#topicsHackathon input');
  topicsPairProgramming = $('#topicsPairProgramming input');

  private ec = ExpectedConditions;

  navigateTo() {
    browser.get('/profile');
  }
}
