import {$, browser, by, element} from 'protractor';

export class UserProfile {
  saveProfileButton = $('#saveProfile');   //by click and by ENTER
  profilePageHeader = $('app-user-profile h2');
  // public googleAccountName = $('');

  linkedInLink = $('#linkedinLink input');
  profileForm = $('form');
  topicsExchange = $('#topicsExchange input');
  topicsHackathon = $('#topicsHackathon input');
  topicsPairProgramming = $('#topicsPairProgramming input');

  // displayName = ;
  // hireFreelanceTopics = $('input[formControlName="wantToHireFreelance"]');

  navigateTo() {
    browser.get('/profile');
  }
}
