import { Selector } from "testcafe";

const url = "http://localhost:4444/";

const loginButton = Selector(
  "body > app-root > div > app-header > mat-toolbar > button.user-profile-corner-button.mat-button.ng-star-inserted > span"
);

const googleLogIn = Selector(
  "#mat-dialog-0 > app-login > div > button:nth-child(2)"
);

const userClass = Selector(".riddkc");
//

fixture`TopicFriend`.page(url);

test(`As a user I want to log in.`, async t => {
  await t.click(loginButton).click(googleLogIn);
  await t
    .click(userClass)
    .typeText("#Email", "MY_GOOGLE_EMAIL")
    .pressKey("enter")
    .expect(Selector("#Passwd").focused)
    .ok()
    .typeText("#Passwd", "MY_GOOGLE_PASSWORD")
    .pressKey("enter")
    .expect(Selector(".username-text").textContent)
    .eql("amoskovkin");
});
