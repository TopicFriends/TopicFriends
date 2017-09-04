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
import {TestWait} from '../../test-support/wait'

// TODO: after all go to firebase and remove interests branch for test user

describe('UserProfile: Symmetric topics: User', () => {
  let loginPage: LoginPage
  let page: UserProfilePage
  let exchange: ExchangeTopicsSelection
  let hackathon: HackathonTopicsSelection
  let pairProgramming: PairProgrammingTopicsSelection
  let assert: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWait

  beforeAll(() => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    exchange = new ExchangeTopicsSelection()
    hackathon = new HackathonTopicsSelection()
    pairProgramming = new PairProgrammingTopicsSelection()
    assert = new TestAssertions()
    cleanUp = new TestCleanUp()
    wait = new TestWait()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  });

  it('can select topic by full topic name: Ionic', () => {
    let topic = 'Ionic';
    exchange.inputTopic(topic);

    let selectedTopic = page.selectFirstSuggestedTag(exchange.topicsInput);
    let expectedTopic = exchange.allSelectedTags();

    assert.topicsToMatch(selectedTopic, expectedTopic);
  });

  it('can select topic by topic name fragment: ion', () => {
    let topic = 'ion';
    hackathon.inputTopic(topic);

    let selectedTopic = page.selectFirstSuggestedTag(hackathon.topicsInput);
    let expectedTopic = hackathon.allSelectedTags();

    assert.topicsToMatch(selectedTopic, expectedTopic);
  });

  it('can select topic by topic non-alphanumeric name: C#', () => {
    let topic = 'C#';
    hackathon.inputTopic(topic);

    let selectedTopic = page.selectFirstSuggestedTag(hackathon.topicsInput);
    let expectedTopic = hackathon.allSelectedTags();

   assert.topicsToMatch(selectedTopic, expectedTopic);
    // expect(selectedTopic).toEqual(' ' + expectedTopic);
  });

  it('can select topic by topic non-alphanumeric name fragment: .NET', () => {
    let topic = '.NET';
    hackathon.inputTopic(topic);

    let selectedTopic = page.selectFirstSuggestedTag(hackathon.topicsInput);
    let expectedTopic = hackathon.allSelectedTags();

    assert.topicsToMatch(selectedTopic, expectedTopic);
    // expect(selectedTopic).toEqual(' ' + expectedTopic);
  });

  it('can fill in profile with autocomplete by keyboard', () => {
    let topic = 'Kar';
    pairProgramming.inputTopic(topic);

    let selectedTopic = page.selectFirstSuggestedTag(pairProgramming.topicsInput);
    let expectedTopic = pairProgramming.allSelectedTags();

    assert.topicsToMatch(selectedTopic, expectedTopic);
  });

  it('can enter first topic from list without searching', () => {
    let selectedTopic = page.selectFirstSuggestedTag(pairProgramming.topicsInput);
    let expectedTopic = pairProgramming.allSelectedTags();

    assert.topicsToMatch(selectedTopic, expectedTopic);
  });

  // it('can select multiple topics by topic name fragment: Angular, .NET, Protractor', () => {
  //
  // });

  // it('can save profile by clicking save', () => {
//Ionic, Karma,
    //first field 2 tags, second 4 tags, third 1 tag

    // }
  // );

  // it('can save profile by pressing CTRL+S', () => {

    // }
  // );

  afterEach(() => {
    page.navigateTo().then(() => {
      wait.forElement(page.userProfileBasicInfo)
    })
  })

  afterAll(() => {
    cleanUp.cleanUpAfterTests()
  })
});
