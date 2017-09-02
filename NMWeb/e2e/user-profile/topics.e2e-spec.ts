import {UserProfilePage, ExchangeTopicsSelection, HackathonTopicsSelection,
  PairProgrammingTopicsSelection} from './user-profile.po'
import {$, browser, ElementFinder, ExpectedConditions, protractor} from 'protractor'
import {LoginPage} from '../login/login.po'
import {promise, WebElement} from 'selenium-webdriver'
import Promise = promise.Promise

browser.waitForAngularEnabled(false);

fdescribe('Page: User can fill in profile with autocomplete by keyboard: ', () => {
  let page;
  let loginPage;
  let exchange;
  let ec;

  beforeAll((done) => {
    page = new UserProfilePage();
    loginPage = new LoginPage();
    exchange = new ExchangeTopicsSelection();
    ec = ExpectedConditions;

    browser.get('profile').then(() => {
      browser.wait(ec.presenceOf(loginPage.loginMenuButton)).then(() => {
        loginPage.logInDefaultTestUser(done);
      })
    });
  });

  // it('hackathon topics by full topic name: Ionic', () => {
  //   let topic = 'Ionic';
  //
  //   exchange.addTopic(topic);
  //   let selectedTopic = selectFirstTopicTag(exchange.topicsInput);
  //   let expectedTopic = exchange.allSelectedTags();
  //
  //   selectedTopic.then(text => {
  //     expect(text.trim()).toEqual(expectedTopic.getText())
  //   });
  // });

  // it('topics exchange by topic name fragment: trac', () => {
  //   // let topic = 'ion';
  //   // exchange.topicsInput.sendKeys(topic);
  //
  //   // let selectedTopic = selectFirstTopicTag(page.exchangeTopicsInput);
  //   // selectedTopic.then(firstTopic => {
  //   //     console.log('selectedTopic: ' + firstTopic + ', expectedTopic: ' + expectedTopic);
  //   //   },
  //   // )
  //   // expect(selectedTopic).toContain(expectedTopic);
  // });

// // it('can fill in profile with autocomplete by keyboard', () => {
// //   browser.wait(ec.presenceOf(page.profileForm), defaultTimeout);
// //
// //   page.exchangeTopicsInput.sendKeys('Kar');
// //   page.exchangeTopicsInput.sendKeys(protractor.Key.ENTER)
// //
// //   //expect().toBeTruthy();
// // });
// //
// // it('can enter first topic from list by pressing ENTER, one option on the list', () => {
// //   browser.wait(ec.presenceOf(page.profileForm), defaultTimeout);
// //
// //   page.exchangeTopicsInput.sendKeys('K');
// //   page.exchangeTopicsInput.sendKeys(protractor.Key.ENTER)
// //   //expect(first topic added is Karma).toBeTruthy();
// // });
// //
//
// //it('test saving with CTRL+S', () => {
// //  }
// // );

  function selectFirstTopicTag(element: ElementFinder): Promise<string> {
    let optionSelected = $('md-option').getText();    //TODO: move to po
    element.sendKeys(protractor.Key.ARROW_DOWN);
    element.sendKeys(protractor.Key.ENTER);

    return optionSelected;
  }

  // TODO: after all go to firebase and remove interests branch for test user
});
