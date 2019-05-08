import { getWindowDocumentLocation } from "../utilsGlobal/utils";
import { login, loginTest } from "../login/login.testc";

export function skillLevelsTest() {
  return test(`Should go to profile`, async t => {
    login(t);
    await t.expect(getWindowDocumentLocation()).contains("/profile");
  });
}
