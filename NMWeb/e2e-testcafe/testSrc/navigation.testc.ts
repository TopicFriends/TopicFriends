/** DRY CoC */
import { getLocation } from './utilsGlobal/utils'
import { logDebug } from './utilsGlobal/log'
import { Selector } from 'testcafe'

async function expectActiveNavBarLink(pageId: string, t: TestController) {
  for ( const curPageId of navToNames ) {
    const isCurActive = pageId === curPageId
    await t.expect(Selector(`#navTo${curPageId}`).hasClass('active')).eql(isCurActive)
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
    .expect(getLocation())
    .contains("/" + name.toLowerCase());
  await expectActiveNavBarLink(name, t)
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
  navToNames.forEach(name => {
    const url = '/' + name
    test('Navigate via url to ' + url, async t => {

    })
  })
}

export function navToPagesTests() {
  navToPages({reloadBetweenNavTests: false}) // faster first (no reloading in-between pages)
  navToPages({reloadBetweenNavTests: true})
  navToPagesFromUrls()
}
