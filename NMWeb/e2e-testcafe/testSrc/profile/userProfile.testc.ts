import { getWindowDocumentLocation } from "../utilsGlobal/utils";
import { loginViaProfile } from "../login/login.testc";
import { Selector } from "testcafe";
import { dismissCookieLawViaCookie } from '../cookieLaw/cookieLaw.testc'

const onProfileConfigButton = Selector("#on-profile-config-button");
const visitGeoTag = Selector(
  "app-user-geo-location[formControlName='whereILive'] mat-form-field"
);
const twitterInput = Selector("app-other-profile-user-name input");

export function userProfileTest() {
  return test(`Should check user's profile page.`, async t => {
    await dismissCookieLawViaCookie(t); // for some reason the one in beforeEach does not work and we need ot repeat here
    await loginViaProfile(t);
    await t.expect(getWindowDocumentLocation()).contains("/profile");
    // Weird behaviour onclicking config
    // await t
    //   .click(onProfileConfigButton)
    //   .takeScreenshot()
    //   .expect(getWindowDocumentLocation())
    //   .contains("/config");

    await t.click(visitGeoTag);
    await t.typeText(twitterInput, "twitter");
  });
}
