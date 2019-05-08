/** DRY CoC */
import {
  getWindowDocumentLocation,
  getWindowDocumentTitle,
} from './utilsGlobal/utils'
import { logDebug } from './utilsGlobal/log'
import { Selector } from 'testcafe'
import { LOCALHOST_URL } from './utilsGlobal/globals'

async function checkPageLoadedCorrectly(t: TestController, pageName: string) {
  await t.expect(getWindowDocumentLocation())
    .contains("/" + pageName.toLowerCase());

  await t.expect(getWindowDocumentTitle())
    .eql(pageName + ' - TopicFriends');

  for ( const curPageId of navToNames ) {
    const curActive = pageName === curPageId
    await t.expect(Selector(`#navTo${curPageId}`).hasClass('active')).eql(curActive)
  }
}

export async function navViaNavBarTo(t: TestController, name: string, { openHamburger }) {
  // await tz
  // .maximizeWindow( )
  logDebug("navViaNavBarTo", name);
  if (openHamburger) {
    await t.click("#menuButtonHamburger");
  }
  await t
    .click("#navTo" + name)
  await checkPageLoadedCorrectly(t, name)
}

export function testNavTo(name) {
  test(`Navigate via NavBar to: ` + name, async t => {
    await navViaNavBarTo(t, name, { openHamburger: true });
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
        await navViaNavBarTo(t, navToName, { openHamburger: false });
      }
    });
  }
}

function navToPagesFromUrls() {
  for ( const pageName of navToNames ) {
    const url = LOCALHOST_URL + '/' + pageName.toLowerCase()
    test('Navigate via url to ' + url, async t => {
      await checkPageLoadedCorrectly(t, pageName)
      // just
    }).page(url)
      .only
  }
}

export function navToPagesTests() {
  navToPages({reloadBetweenNavTests: false}) // faster first (no reloading in-between pages)
  navToPages({reloadBetweenNavTests: true})
  navToPagesFromUrls()
}
