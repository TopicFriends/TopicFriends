import {
  UserProfilePage, TopicSections
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
  let topicSelection: TopicSections
  let assert: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWait
  let support: TestSupport

  beforeAll(() => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    topicSelection = new TopicSections()
    assert = new TestAssertions()
    cleanUp = new TestCleanUp()
    wait = new TestWait()
    support = new TestSupport()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  });

  function testTopicTagCanBeAdded(topic: string) {
    let exchange = topicSelection.exchangeSectionSelector
    topicSelection.inputTopic(exchange, topic)

    let selectedTopic = page.selectFirstSuggestedTag(topicSelection.assembleTopicInputLocator(exchange))
    let expectedTopic = topicSelection.returnSelectedSectionTags(exchange)

    support.takeScreenshot(topic)

    assert.tagMatch(selectedTopic, expectedTopic)
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
