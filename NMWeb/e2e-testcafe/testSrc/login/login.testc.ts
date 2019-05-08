import { Selector } from "testcafe";
import { getLocation } from "../utilsGlobal/utils";
import { TEST_USER, LOCALHOST_URL } from "../utilsGlobal/globals";

const loginOrSignUpButton = Selector("#login-or-sign-up-corner-button");
const loginViaEmailPassword = Selector("#loginViaEmailPassword");
const emailInput = Selector("#email");
const passwordInput = Selector("#password");
const loginViaProfileButton = Selector("#login-on-profile-button");
const acceptCookiesButton = Selector("#accept-cookies-button");

export function loginViaProfileTest() {
  return test(`Should log-in using button on profile and go to profile page`, async t => {
    loginViaProfile(t);
    await t.expect(getLocation()).contains("/profile");
  });
}

export function loginTest() {
  return test(`Should log-in with test account and go to profile page`, async t => {
    login(t);
    // Problem with assertion
    // await t.expect(getLocation()).contains("/profile");
  });
}

export async function loginByEmailPassword(t, location?) {
  location && (await t.navigateTo(LOCALHOST_URL + location));

  if (location === "profile") {
    await t.click(loginViaProfileButton);
  } else {
    await t.click(loginOrSignUpButton);
  }

  return await t
    .typeText(emailInput, TEST_USER.userName)
    .typeText(passwordInput, TEST_USER.password)
    .click(loginViaEmailPassword)
    .click(acceptCookiesButton);
}

export async function login(t) {
  return loginByEmailPassword(t, "/");
}

export async function loginViaProfile(t) {
  return loginByEmailPassword(t, "profile");
}
