import { getLocation } from "./testUtils";
import { loginViaProfile } from "./login";
import { Selector } from "testcafe";

const onProfileConfigButton = Selector("#on-profile-config-button");
const visitGeoTag = Selector(
  "app-user-geo-location[formControlName='whereILive'] mat-form-field"
);
const twitterInput = Selector("app-other-profile-user-name input");

export function userProfileTest() {
  return test(`Should check user's profile page.`, async t => {
    await loginViaProfile(t);
    await t.expect(getLocation()).contains("/profile");
    // Weird behaviour onclicking config
    // await t
    //   .click(onProfileConfigButton)
    //   .takeScreenshot()
    //   .expect(getLocation())
    //   .contains("/config");

    await t.click(visitGeoTag);
    await t.typeText(twitterInput, "twitter");
  });
}
