import { Selector } from "testcafe";
import { getLocation } from "./testUtils";
import {
  login,
  loginTest,
  loginViaProfile,
  loginViaProfileTest
} from "./login";
import { userProfileTest } from "./userProfile";
import { LOCALHOST_URL } from "./globals";

(fixture`TopicFriends` as any)
  // .disablePageReloads
  .page(LOCALHOST_URL);

userProfileTest();
loginViaProfileTest();
loginTest();
/** DRY CoC */
export async function navTo(t, name, { openHamburger }) {
  // await tz
  // .maximizeWindow( )
  console.log("navTo", name);
  if (openHamburger) {
    await t.click("#menuButtonHamburger");
  }
  await t
    .click("#navTo" + name)
    .expect(getLocation())
    .contains("/" + name.toLowerCase());
}

export function testNavTo(name) {
  test(`Navigate to: ` + name, async t => {
    await navTo(t, name, { openHamburger: true });
  });
}

export const reloadBetweenNavTests = true;

export const navToNames = "Meetings People Topics Map About Profile".split(" "); // Profile can cause native dialog (unsaved), so should be last
console.log("navToNames", navToNames);

// TODO configure testcafe to run test from differents files

if (reloadBetweenNavTests) {
  navToNames.forEach(navToName => {
    testNavTo(navToName);
  });
} else {
  test(`Navigate to pages`, async t => {
    await t.click("#menuButtonHamburger");
    console.log("navToNames", navToNames);
    for (const navToName of navToNames) {
      await navTo(t, navToName, { openHamburger: false });
    }
  });
}
