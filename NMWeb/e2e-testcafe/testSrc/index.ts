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

(fixture`TopicFriends` as any)
  // .disablePageReloads
  .page(url);

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

/** DRY CoC */
export async function navTo(t, name, {openHamburger}) {
  // await tz
  // .maximizeWindow( )
  console.log('navTo', name)
  if ( openHamburger ) {
    await t.click('#menuButtonHamburger')
  }
  await t.click('#navTo' + name)
    .expect(getLocation()).contains('/' + name.toLowerCase())
    .takeScreenshot()
}

export function testNavTo(name) {
  test(`Navigate to: ` + name, async t => {
    await navTo(t, name, {openHamburger: true})
  })
}

export const reloadBetweenNavTests = true

export const navToNames = 'Meetings People Topics Map About Profile'.split(' ') // Profile can cause native dialog (unsaved), so should be last
console.log('navToNames', navToNames)

if ( reloadBetweenNavTests ) {
  navToNames.forEach(navToName => {
    testNavTo(navToName)
  })
} else {
  test(`Navigate to pages`, async t => {
    await t.click('#menuButtonHamburger')
    console.log('navToNames', navToNames)
    for ( const navToName of navToNames ) {
      await navTo(t, navToName, {openHamburger: false})
    }
    // navToNames.forEach(async (navToName) => {
    //   await navTo(t, navToName, {openHamburger: false})
    // })
  })
}
