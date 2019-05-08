import { Selector } from "testcafe";
import { getLocation } from "./utilsGlobal/utils";
import {
  login,
  loginTest,
  loginViaProfile,
  loginViaProfileTest
} from "./login/login.testc";
import { userProfileTest } from "./profile/userProfile.testc";
import { LOCALHOST_URL } from "./utilsGlobal/globals";
import { navToPagesTests } from './navigation.testc'

const acceptCookiesButton = Selector("#accept-cookies-button");

(fixture`TopicFriends` as any)
  // .disablePageReloads
  .page(LOCALHOST_URL)
  .beforeEach(async t => {
    console.log('beforeEach() will dismiss cookie bar')
    await t.click(acceptCookiesButton)
  });

// NOTE: Put fastest tests first

loginViaProfileTest();
loginTest();
navToPagesTests();
userProfileTest();
