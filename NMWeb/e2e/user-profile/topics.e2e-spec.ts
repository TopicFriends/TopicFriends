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
  let hackathon;
  let ec;

  beforeAll((done) => {
    page = new UserProfilePage();
    loginPage = new LoginPage();
    exchange = new ExchangeTopicsSelection();
    hackathon = new HackathonTopicsSelection();
    ec = ExpectedConditions;

    browser.get('profile').then(() => {
      browser.wait(ec.presenceOf(loginPage.loginMenuButton)).then(() => {
        loginPage.logInDefaultTestUser(done);
      })
    });
  });

  it('hackathon topics by full topic name: Ionic', () => {
    let topic = 'Ionic';
    exchange.inputTopic(topic);

    let selectedTopic = selectFirstTopicTag(exchange.topicsInput);
    let expectedTopic = exchange.allSelectedTags();

    expectedTopic.first().getText().then(expected => {
      expect(selectedTopic).toEqual(' ' + expected);
    });
  });

  it('topics exchange by topic name fragment: ion', () => {
    let topic = 'ion';
    hackathon.inputTopic(topic);

    let selectedTopic = selectFirstTopicTag(hackathon.topicsInput);
    let expectedTopic = hackathon.allSelectedTags();

    expectedTopic.first().getText().then(expected => {
      expect(selectedTopic).toEqual(' ' + expected);    // Trimming needs more code than adding space
    });
  });

// // it('can fill in profile with autocomplete by keyboard', () => {

// //   page.exchangeTopicsInput.sendKeys('Kar');
// //

// // });
// //
// // it('can enter first topic from list by pressing ENTER, one option on the list', () => {

// //   page.exchangeTopicsInput.sendKeys('K');

// // });
// //
//
// //it('test saving with clicking save', () => {
// //  }
// // );

  function selectFirstTopicTag(element: ElementFinder): Promise<string> {
    element.sendKeys(protractor.Key.ARROW_DOWN);
    let optionSelected = $('md-option.mat-active').getText();    //TODO: move to po
    element.sendKeys(protractor.Key.ENTER);

    return optionSelected;
  }

  // TODO: after all go to firebase and remove interests branch for test user
});
