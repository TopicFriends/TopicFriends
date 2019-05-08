/** DRY CoC */
import { getLocation } from './utilsGlobal/utils'
import { logDebug } from './utilsGlobal/log'

export async function navTo(t, name, { openHamburger }) {
  // await tz
  // .maximizeWindow( )
  logDebug("navTo", name);
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

export const navToNames = "Meetings People Topics Map About Profile".split(" "); // Profile can cause native dialog (unsaved), so should be last
logDebug("navToNames", navToNames);

export function navToPages(options: {reloadBetweenNavTests: boolean}) {
  if (options.reloadBetweenNavTests) {
    navToNames.forEach(navToName => {
      testNavTo(navToName);
    });
  } else {
    test(`Navigate to pages without reloading between them (faster and can uncover certain problems)`, async t => {
      await t.click("#menuButtonHamburger");
      logDebug("navToNames", navToNames);
      for (const navToName of navToNames) {
        await navTo(t, navToName, { openHamburger: false });
      }
    });
  }
}

export function navToPagesTests() {
  navToPages({reloadBetweenNavTests: false}) // faster first
  navToPages({reloadBetweenNavTests: true})
}
