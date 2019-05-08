import { Selector } from "testcafe";
import {
  loginTest,
  loginViaProfileTest
} from "./login/login.testc";
import { userProfileTest } from "./profile/userProfile.testc";
import { LOCALHOST_URL } from "./utilsGlobal/globals";
import { navToPagesTests } from './navigation.testc'
import { dismissCookieLawViaCookie } from './cookieLaw/cookieLaw.testc'

(fixture`TopicFriends` as any)
  // .disablePageReloads
  .page(LOCALHOST_URL)
  .beforeEach(async t => {
    console.log('beforeEach(')
    await dismissCookieLawViaCookie(t)
  });

// NOTE: Put fastest tests first, so that we see any failures quickly

loginViaProfileTest();
loginTest();
navToPagesTests();
userProfileTest();
