import {
  UserProfilePage, ExchangeTopicsSelection, HackathonTopicsSelection,
  PairProgrammingTopicsSelection,
} from './user-profile.po'
import {ElementFinder, protractor} from 'protractor'
import {LoginPage} from '../login/login.po'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestAssertions} from '../../test-support/assertions'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWaits} from '../../test-support/wait'

// TODO: after all go to firebase and remove interests branch for test user

describe('UserProfile: Symmetric topics: User', () => {
  let loginPage: LoginPage
  let page: UserProfilePage
  let exchange: ExchangeTopicsSelection
  let hackathon: HackathonTopicsSelection
  let pairProgramming: PairProgrammingTopicsSelection
  let assert: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWaits

  beforeAll(() => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    exchange = new ExchangeTopicsSelection()
    hackathon = new HackathonTopicsSelection()
    pairProgramming = new PairProgrammingTopicsSelection()
    assert = new TestAssertions()
    cleanUp = new TestCleanUp()
    wait = new TestWaits()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  });

  it('hackathon topics by full topic name: Ionic', () => {
    let topic = 'Ionic';
    exchange.inputTopic(topic);

    let selectedTopic = selectFirstSuggestedTag(exchange.topicsInput);
    let expectedTopic = exchange.allSelectedTags();

    assert.topicsToMatch(expectedTopic, selectedTopic);
  });

  it('topics exchange by topic name fragment: ion', () => {
    let topic = 'ion';
    hackathon.inputTopic(topic);

    let selectedTopic = selectFirstSuggestedTag(hackathon.topicsInput);
    let expectedTopic = hackathon.allSelectedTags();

    assert.topicsToMatch(expectedTopic, selectedTopic);
  });

  it('can fill in profile with autocomplete by keyboard', () => {
    let topic = 'Kar';
    pairProgramming.inputTopic(topic);

    let selectedTopic = selectFirstSuggestedTag(pairProgramming.topicsInput);
    let expectedTopic = pairProgramming.allSelectedTags();

    assert.topicsToMatch(expectedTopic, selectedTopic);
  });

  it('can enter first topic from list without searching', () => {
    let selectedTopic = selectFirstSuggestedTag(pairProgramming.topicsInput);
    let expectedTopic = pairProgramming.allSelectedTags();

    assert.topicsToMatch(expectedTopic, selectedTopic);
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

  afterEach(() => {
    page.navigateTo().then(() => {
      wait.forElement(page.userProfileBasicInfo)
    })
  })

  afterAll(() => {
    cleanUp.cleanUpAfterTests()
  })
});
