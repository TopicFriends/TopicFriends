import { Selector } from 'testcafe';
import { getLocation } from './testUtils'

const url = "http://localhost:4444/";

const loginOrSignupButton = Selector(
  "#login-or-sign-up-corner-button"
);

const loginViaEmailPassword = Selector(
  "#loginViaEmailPassword"
);

const googleLogIn = Selector(
  "#mat-dialog-0 > app-login > div > button:nth-child(2)"
);

const userClass = Selector(".riddkc");
//
const usernameField = Selector("#identifierId");
const userEmail = "qa.cod3r@gmail.com";

const passwordField = Selector(
  ".I0VJ4d > div:nth-child(1) > input:nth-child(1)"
);
const userPassword = "lekcjaonlineprod";

fixture`TopicFriend`.page(url);

test(`As a user I want to log in.`, async t => {
  await t.click(loginOrSignupButton).click(loginViaEmailPassword);
  // await t
  //   .typeText(usernameField, userEmail)
  //   .click()
    // .pressKey("enter")
    //
    // .typeText(passwordField, userPassword)
    // .pressKey("enter")
    // .typeText("#mat-input-1", "My name")
    // .typeText("#mat-input-2", "My name")
    // .typeText("#mat-input-3", "My name");
});

test(`Navigate to Meetings`, async t => {
  await t
    .click('#menuButtonHamburger')
    .click('#navToMeetings')
    .expect(getLocation()).contains('/meeting');
})

test(`Navigate to People`, async t => {
  await t
    .click('#menuButtonHamburger')
    .click('#navToPeople')
    .expect(getLocation()).contains('/people');
})

test(`Navigate to Profile`, async t => {
  await t
    .click('#menuButtonHamburger')
    .click('#navToProfile')
    .expect(getLocation()).contains('/profile');
})
