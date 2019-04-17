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
const usernameField = Selector("#identifierId");
const userEmail = "qa.cod3r@gmail.com";

const passwordField = Selector(
  ".I0VJ4d > div:nth-child(1) > input:nth-child(1)"
);
const userPassword = "lekcjaonlineprod";

fixture`TopicFriend`.page(url);

test(`As a user I want to log in.`, async t => {
  await t.click(loginButton).click(googleLogIn);
  await t

    .typeText(usernameField, userEmail)
    .pressKey("enter")

    .typeText(passwordField, userPassword)
    .pressKey("enter")
    .typeText("#mat-input-1", "My name")
    .typeText("#mat-input-2", "My name")
    .typeText("#mat-input-3", "My name");
});
