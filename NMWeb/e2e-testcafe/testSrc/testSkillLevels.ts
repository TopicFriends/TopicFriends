import { getLocation } from './testUtils';
import {
  login,
  loginTest,
} from './login'

export function skillLevelsTest() {
  return test(`Should go to profile`, async t => {
    login(t);
    await t.expect(getLocation()).contains('/profile');
  });
}
