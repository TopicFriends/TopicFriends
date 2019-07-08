import { getWindowDocumentLocation } from '../utilsGlobal/utils';
import { loginViaProfile } from '../login/login.testc';
import { Selector } from 'testcafe';
import { dismissCookieLawViaCookie } from '../cookieLaw/cookieLaw.testc';
import * as _ from 'lodash';

const onProfileConfigButton = Selector('#on-profile-config-button');
const visitGeoTag = Selector("app-user-geo-location[formControlName='whereILive'] mat-form-field");
const twitterInput = Selector('app-other-profile-user-name input');

const closeTagButton = Selector('.ion-close-circled');
const acceptGeoLocationButton = Selector(
  'body > app-root > div > mat-sidenav-container > mat-sidenav-content > div > app-user-profile-details > form > app-user-geo-locations > mat-card > mat-card-content > div > app-user-geo-location:nth-child(1) > app-user-pick-location > p-dialog > div > div.ui-dialog-content.ui-widget-content > button'
);

export function userProfileTests() {
  function userProfileGeoLocations() {
    return test(`Should check geoLocation tags on profile page.`, async t => {
      await dismissCookieLawViaCookie(t); // for some reason the one in beforeEach does not work and we need ot repeat here
      await loginViaProfile(t);
      await t.expect(getWindowDocumentLocation()).contains('/profile');

      const geoTags = ['Live', 'Work', 'Study', 'Studied', 'Visit', 'homeTown'];
      const inputFieldOnMapIDNum = _.range(36, 42);
      // Iterate through the geolocation pickers and check map
      for (let index = 0; index < inputFieldOnMapIDNum.length; index++) {
        let randomNumber = Math.floor(Math.random() * 10);
        let locationPicker;
        if (geoTags[index] === 'homeTown') {
          locationPicker = Selector("app-user-geo-location[formControlName='" + geoTags[index] + "'] mat-form-field");
        } else {
          locationPicker = Selector("app-user-geo-location[formControlName='whereI" + geoTags[index] + "'] mat-form-field");
        }

        await t.click(locationPicker);
        const inputSearchForLocation = Selector("input[id='mat-input-" + inputFieldOnMapIDNum[index] + "']");
        await t
          .click(inputSearchForLocation)
          .typeText(inputSearchForLocation, 'Calle ')
          .pressKey(' down '.repeat(randomNumber) + ' enter')
          .takeScreenshot()
          .click(acceptGeoLocationButton);
      }
    });
  }
  function userProfileInterests() {
    return test(`Should check interests input on user's Profile.`, async t => {
      await dismissCookieLawViaCookie(t); // for some reason the one in beforeEach does not work and we need ot repeat here
      await loginViaProfile(t);
      await t.expect(getWindowDocumentLocation()).contains('/profile');

      // Iterate through every interest's Selector checking the interests input
      for (let index of _.range(22, 36)) {
        let randomNumber = Math.floor(Math.random() * 10);

        let exchangeKnowledge = Selector('app-topic-group-card #mat-input-' + index);
        await t.click(exchangeKnowledge);
        await t.pressKey(' down '.repeat(randomNumber) + ' enter').click(closeTagButton);
      }
    });
  }
  function userProfileOtherProfiles() {
    return test(`Should check other profiles on user's Profile.`, async t => {
      await dismissCookieLawViaCookie(t); // for some reason the one in beforeEach does not work and we need ot repeat here
      await loginViaProfile(t);
      await t.expect(getWindowDocumentLocation()).contains('/profile');
      await t.typeText(twitterInput, 'twitter');
    });
  }

  userProfileGeoLocations();
  userProfileInterests();
  userProfileOtherProfiles();
}
