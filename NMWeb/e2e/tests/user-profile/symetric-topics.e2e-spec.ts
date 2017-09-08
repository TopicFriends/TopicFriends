import {
  UserProfilePage, TopicSections,
} from './user-profile.po'
import {LoginPage} from '../login/login.po'
import {TestAssertions} from '../../test-support/assertions'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWait} from '../../test-support/wait'
import {TestSupport} from '../../test-support/test-support'
import {$, browser} from 'protractor'

describe('UserProfile: Symmetric topics: User', () => {
  let loginPage: LoginPage
  let page: UserProfilePage
  let topicSections: TopicSections
  let assert: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWait
  let support: TestSupport

  beforeAll(() => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    topicSections = new TopicSections()
    assert = new TestAssertions()
    cleanUp = new TestCleanUp()
    wait = new TestWait()
    support = new TestSupport()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  });

  function testTopicTagCanBeAdded(topic: string) {
    let exchange = topicSections.exchangeSectionSelector
    topicSections.inputTopic(exchange, topic)
    let selectedTopic = page.selectFirstSuggestedTag(topicSections.assembleTopicInputLocator(exchange))
    let expectedTopic = topicSections.returnSelectedSectionTags(exchange)

    // support.takeScreenshot(topic)

    assert.tagMatch(selectedTopic, expectedTopic)
  }

  it('can select topic by full topic name: Ionic', () => {
    let topic = 'Ionic'
    testTopicTagCanBeAdded(topic)
  });

  it('can select topic by topic name fragment: ion', () => {
    let topic = 'ion'
    testTopicTagCanBeAdded(topic)
  });

  it('can select topic by topic non-alphanumeric in name: C#', () => {
    let topic = 'C#'
    testTopicTagCanBeAdded(topic)
  });

  it('can select topic by topic non-alphanumeric in name fragment: .NET', () => {
    let topic = '.NET'
    testTopicTagCanBeAdded(topic)
  });

  it('can fill in profile with autocomplete by keyboard', () => {
    let topic = 'Kar'
    testTopicTagCanBeAdded(topic)
  });

  it('can enter first topic from list without searching', () => {
    let selectedTopic = page.selectFirstSuggestedTag(
      topicSections.assembleTopicInputLocator(topicSections.pairProgrammingSectionSelector))

    let expectedTopic = topicSections.returnSelectedSectionTags(topicSections.pairProgrammingSectionSelector)

    assert.tagMatch(selectedTopic, expectedTopic);
  });

  // it('nothing selected when no value entered', () => {
    // TODO
  // });

  it('can select multiple topics: Angular, .NET, angular universal', () => {
    let topics = ['Angular', '.NET', 'angular universal']
    let hackathon = topicSections.hackathonSectionSelector

    let selectedTopics = topicSections.inputMultipleTagsInOneSection(hackathon, topics)
    assert.sectionTagsMatch(hackathon, selectedTopics)
  });

  it('can save profile by clicking save', () => {
    let topicsHackathon = ['c', 'angular universal']
    let topicsSectionHackathon = topicSections.hackathonSectionSelector
    wait.forElement($(topicsSectionHackathon))
    let selectedTopicsHackathon = topicSections.inputMultipleTagsInOneSection(topicsSectionHackathon, topicsHackathon)
    assert.sectionTagsMatch(topicsSectionHackathon, selectedTopicsHackathon)

    let topicsPairProgramming = ['Java', 'unity', 'ui', 'Protractor']
    let topicsSectionPairProgramming = topicSections.pairProgrammingSectionSelector
    let selectedTopicsPairProgramming = topicSections.inputMultipleTagsInOneSection(topicsSectionPairProgramming, topicsPairProgramming)
    assert.sectionTagsMatch(topicsSectionPairProgramming, selectedTopicsPairProgramming)

    let topicsExchange = ['SQL']
    let topicsSectionExchange = topicSections.exchangeSectionSelector
    let selectedTopicsExchange = topicSections.inputMultipleTagsInOneSection(topicsSectionExchange, topicsExchange)
    assert.sectionTagsMatch(topicsSectionExchange, selectedTopicsExchange)

    page.saveProfileButton.click()
    page.navigateTo().then(() => {
      wait.forElement($(topicSections.tagSelector)).then(() => {
        assert.sectionTagsMatch(topicsSectionHackathon, selectedTopicsHackathon)
        assert.sectionTagsMatch(topicsSectionPairProgramming, selectedTopicsPairProgramming)
        assert.sectionTagsMatch(topicsSectionExchange, selectedTopicsExchange)
      })
    })
  });

  // it('can change all selected topics', () => {
  //remove topics from all sections, don't reload the page, select new topics, save, reload page and assert new topics
  // }
  // );

  it('remove all topics from profile', () => {
    wait.forElement($(topicSections.tagSelector))
    topicSections.removeAllTags()

    page.saveProfileButton.click()
    page.navigateTo().then(() => {
      wait.forElement(page.userProfileBasicInfo).then(() => {
        browser.sleep(5000)
        expect(topicSections.allTagsClosings()).toEqual([])    //TODO
      })
    })
  });

  // it('can save profile by pressing CTRL+S', () => {
  // });

  afterEach(() => {
    page.navigateTo().then(() => {
      wait.forElement(page.userProfileBasicInfo)
    })
  })

  afterAll(() => {
    cleanUp.cleanUpAfterTests()
  })
});
