import {
  UserProfilePage, ExchangeTopicsSelection, HackathonTopicsSelection,
  PairProgrammingTopicsSelection,
} from './user-profile.po'
import {browser, ElementFinder, ExpectedConditions, protractor} from 'protractor'
import {LoginPage} from '../login/login.po'
import {promise,} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestAssertions} from '../../common/assertions'
import {TestCleanUp} from '../../common/clean-up'
import {TestWaits} from '../../common/wait'

// TODO: after all go to firebase and remove interests branch for test user

describe('Page: User can fill in profile with autocomplete by keyboard: ', () => {
  let loginPage: LoginPage
  let page: UserProfilePage
  let exchange: ExchangeTopicsSelection
  let hackathon: HackathonTopicsSelection
  let pairProgramming: PairProgrammingTopicsSelection
  let expect: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWaits
  let ec = ExpectedConditions

  beforeAll((done) => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    exchange = new ExchangeTopicsSelection()
    hackathon = new HackathonTopicsSelection()
    pairProgramming = new PairProgrammingTopicsSelection()
    expect = new TestAssertions()
    cleanUp = new TestCleanUp()
    wait = new TestWaits()

    page.navigateTo().then(() => {
     wait.forElement(loginPage.loginMenuButton).then(() => {
        loginPage.loginIfNeeded(done)
      })
    });
  });

  it('hackathon topics by full topic name: Ionic', () => {
    let topic = 'Ionic';
    exchange.inputTopic(topic);

    let selectedTopic = selectFirstSuggestedTag(exchange.topicsInput);
    let expectedTopic = exchange.allSelectedTags();

    expect.expectTopicsToMatch(expectedTopic, selectedTopic);
  });

  it('topics exchange by topic name fragment: ion', () => {
    let topic = 'ion';
    hackathon.inputTopic(topic);

    let selectedTopic = selectFirstSuggestedTag(hackathon.topicsInput);
    let expectedTopic = hackathon.allSelectedTags();

    expect.expectTopicsToMatch(expectedTopic, selectedTopic);
  });

  it('can fill in profile with autocomplete by keyboard', () => {
    let topic = 'Kar';
    pairProgramming.inputTopic(topic);

    let selectedTopic = selectFirstSuggestedTag(pairProgramming.topicsInput);
    let expectedTopic = pairProgramming.allSelectedTags();

    expect.expectTopicsToMatch(expectedTopic, selectedTopic);
  });

  it('can enter first topic from list without searching', () => {
    let selectedTopic = selectFirstSuggestedTag(pairProgramming.topicsInput);
    let expectedTopic = pairProgramming.allSelectedTags();

    selectedTopic.then(topic => {
      page.expectTopicTagSelected();
    });
  });

//it('test saving with clicking save', () => {
//  }
// );

  function selectFirstSuggestedTag(element: ElementFinder): Promise<string> {
    element.sendKeys(protractor.Key.ARROW_DOWN);
    let optionSelected = page.markedTopicFromSelectList.getText();
    element.sendKeys(protractor.Key.ENTER);

    return optionSelected;
  }

  afterAll(() => {
    cleanUp.cleanUpAfterTests();
  })
});
