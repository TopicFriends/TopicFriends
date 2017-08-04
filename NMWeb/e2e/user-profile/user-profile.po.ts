import {$, browser, by, element, ExpectedConditions} from 'protractor';

export class UserProfilePage {
  saveProfileButton = $('#saveProfile');   //by click and by ENTER
  userProfileSelector = 'app-user-profile';
  userProfile = $(this.userProfileSelector);
  // public googleAccountName = $('');

  linkedInLink = $('#linkedinLink input');
  profileForm = $('form');
  topicsExchange = $('#topicsExchange input');
  topicsHackathon = $('#topicsHackathon input');
  topicsPairProgramming = $('#topicsPairProgramming input');

  private ec = ExpectedConditions;

  // displayName = ;

  navigateTo() {
    browser.get('/profile');
  }
}
