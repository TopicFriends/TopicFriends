import { Selector } from "testcafe"

const acceptCookiesButton = Selector("#accept-cookies-button");
const cookieLawComponent = Selector("cookie-law");
const cookieLawWrapper = Selector(".cookie-law-wrapper");

export async function dismissCookieLawViaCookie(t) {
  // console.log('dismissCookieLawViaCookie')
  // document.cookie = document.cookie + ';' + 'cookieLawSeen=true'
  return await dismissCookieLawViaButton(t) // no access to document yet; using button as workaround
}

export async function dismissCookieLawViaButton(t) {
  console.log('dismissCookieLawViaButton')
  if ( await cookieLawWrapper.count > 0 ) {
    await t.click(acceptCookiesButton)
      .expect(cookieLawWrapper.count).eql(0) // need to wait, coz disappearance animates and can still make elements not clickable
  }
}
