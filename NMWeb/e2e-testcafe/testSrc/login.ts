import { Selector } from 'testcafe'
import { getLocation } from './testUtils'
import { TESTUSER } from './globals'

const loginOrSignupButton = Selector('#login-or-sign-up-corner-button');
const loginViaEmailPassword = Selector('#loginViaEmailPassword');
const emailInput = Selector('#email');
const passwordInput = Selector('#password');

export function loginTest() {
  return test(`Should log-in with test account and go to profile page`, async t => {
    login(t);
    await t.expect(getLocation()).contains('/profile');
  });
}

export async function login(t) {
  return await t
    .click(loginOrSignupButton)
    .typeText(emailInput, TESTUSER.userName)
    .typeText(passwordInput, TESTUSER.password)
    .click(loginViaEmailPassword);
};
