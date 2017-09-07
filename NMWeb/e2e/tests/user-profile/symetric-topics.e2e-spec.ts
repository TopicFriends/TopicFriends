import {
  UserProfilePage, TopicsSelection
} from './user-profile.po'
import {LoginPage} from '../login/login.po'
import {TestAssertions} from '../../test-support/assertions'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWait} from '../../test-support/wait'
import {TestSupport} from '../../test-support/test-support'

// TODO: after all go to firebase and remove interests branch for test user

describe('UserProfile: Symmetric topics: User', () => {
  let loginPage: LoginPage
  let page: UserProfilePage
  let topicSelection: TopicsSelection
  let assert: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWait
  let support: TestSupport

  beforeAll(() => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    topicSelection = new TopicsSelection()
    assert = new TestAssertions()
    cleanUp = new TestCleanUp()
    wait = new TestWait()
    support = new TestSupport()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  });

  function testTopicTagCanBeAdded(topic: string) {
    let exchange = topicSelection.exchangeSelector
    topicSelection.inputTopic(exchange, topic)

    let selectedTopic = page.selectFirstSuggestedTag(topicSelection.assembleTopicInputLocator(exchange))
    let expectedTopic = topicSelection.allSelectedTags(exchange)

    support.takeScreenshot(topic)

    assert.topicsToMatch(selectedTopic, expectedTopic)
  }

  it('can select topic by full topic name: Ionic', () => {
    let topic = 'Ionic'
    testTopicTagCanBeAdded(topic)
  });

  it('can select topic by topic name fragment: ion', () => {
    let topic = 'ion'
    testTopicTagCanBeAdded(topic)
  });

  it('can select topic by topic non-alphanumeric name: C#', () => {
    let topic = 'C#'
    testTopicTagCanBeAdded(topic)
  });

  it('can select topic by topic non-alphanumeric name fragment: .NET', () => {
    let topic = '.NET'
    testTopicTagCanBeAdded(topic)
  });

  it('can fill in profile with autocomplete by keyboard', () => {
    let topic = 'Kar'
    testTopicTagCanBeAdded(topic)
  });

  it('can enter first topic from list without searching', () => {
    let selectedTopic = page.selectFirstSuggestedTag(
      topicSelection.assembleTopicInputLocator(topicSelection.pairProgrammingSelector))

    let expectedTopic = topicSelection.allSelectedTags(topicSelection.pairProgrammingSelector)

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
