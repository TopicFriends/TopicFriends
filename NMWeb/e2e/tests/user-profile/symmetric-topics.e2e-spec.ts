import {UserProfilePage} from './user-profile.po'
import {TopicsSections} from './topic-sections.po'
import {LoginPage} from '../login/login.po'
import {TestAssertions} from '../../test-support/assertions'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWait} from '../../test-support/wait'
import {TestSupport} from '../../test-support/test-support'
import {$, browser, ExpectedConditions} from 'protractor'
import {ProtractorWrapper} from '../../test-support/protractor-wrapper'

describe('Symmetric topics on Profile page: User', () => {
  let loginPage: LoginPage
  let page: UserProfilePage
  let topicSections: TopicsSections
  let assert: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWait
  let support: TestSupport
  let ptor: ProtractorWrapper

  beforeAll(() => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    topicSections = new TopicsSections()
    assert = new TestAssertions()
    cleanUp = new TestCleanUp()
    wait = new TestWait()
    support = new TestSupport()
    ptor = new ProtractorWrapper()

    page.navigateTo().then(() => {
      loginPage.loginWhenAlreadySignedInToGoogle()
    });
  });

  function testTopicTagCanBeAdded(topic: string) {
    let exchange = topicSections.exchangeSectionSelector
    topicSections.inputTopic(exchange, topic)
    browser.sleep(300)
    let selectedTopic = page.selectFirstSuggestedTag(topicSections.assembleTopicInputLocator(exchange))
    let expectedTopic = topicSections.returnSelectedSectionTags(exchange)

    assert.tagsMatch(selectedTopic, expectedTopic)
  }

  it('can select topic by full topic name: Ionic', () => {
    let topic = 'Ionic'
    testTopicTagCanBeAdded(topic)
  });

  it('can select topic by topic name fragment: pro', () => {
    let topic = 'pro'
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

    assert.tagsMatch(selectedTopic, expectedTopic);
  });

  // it('nothing selected when no value entered', () => {
    // TODO
  // });

  it('can select multiple topics: Typescript, .NET, universal', () => {
    let topics = ['Typescript', '.NET', 'universal']
    let hackathon = topicSections.hackathonSectionSelector
    wait.forElementPresent($(hackathon))

    let selectedTopics = topicSections.inputMultipleTagsInOneSection(hackathon, topics)
    assert.sectionTagsMatch(hackathon, selectedTopics)
  });

  it('can save profile by clicking save', () => {
    let topicsHackathon = ['c', 'universal']
    let topicsSectionHackathon = topicSections.hackathonSectionSelector
    wait.forElementPresent($(topicsSectionHackathon))
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

    ptor.click(page.saveProfileButton)
    page.navigateTo().then(() => {
      browser.sleep(3000)
      wait.forElementPresent($(topicSections.tagSelector)).then(() => {
        assert.sectionTagsMatch(topicsSectionHackathon, selectedTopicsHackathon)
        assert.sectionTagsMatch(topicsSectionPairProgramming, selectedTopicsPairProgramming)
        assert.sectionTagsMatch(topicsSectionExchange, selectedTopicsExchange)
      })
    })
  });

  it('can change selected topics', () => {
    wait.forElementPresent($(topicSections.tagSelector))
    topicSections.removeAllTags()

    let topicsHackathon = ['micros', 'seed f']
    let topicsSectionExchange = topicSections.exchangeSectionSelector
    wait.forElementPresent($(topicsSectionExchange))
    let selectedTopicsExchange = topicSections.inputMultipleTagsInOneSection(topicsSectionExchange, topicsHackathon)

    let topicsPairProgramming = ['coffee', 'express', 'capistr']
    let topicsSectionPairProgramming = topicSections.pairProgrammingSectionSelector
    let selectedTopicsPairProgramming = topicSections.inputMultipleTagsInOneSection(topicsSectionPairProgramming, topicsPairProgramming)


    page.saveProfileButton.click()
    page.navigateTo().then(() => {
      wait.forElementPresent($(topicSections.tagSelector)).then(() => {
        assert.sectionTagsMatch(topicsSectionPairProgramming, selectedTopicsPairProgramming)
        assert.sectionTagsMatch(topicsSectionExchange, selectedTopicsExchange)
      })
    })
  });

  it('can remove all topics from profile', () => {
    wait.forElementPresent($(topicSections.tagSelector))
    topicSections.removeAllTags()

    ptor.click(page.saveProfileButton)
    page.navigateTo().then(() => {
      wait.forElementPresent(page.userProfileBasicInfo).then(() => {
        browser.sleep(3000)
        expect(topicSections.allTagsClosings().count()).toEqual(0)
      })
    })
  });

  // it('can save profile by pressing CTRL+S', () => {
  // });

  afterEach(() => {
    page.navigateTo().then(() => {
      support.acceptAlertIfAppears()
      wait.forElementPresent($(topicSections.hackathonSectionSelector))
    })
  })

  afterAll(() => {
    cleanUp.cleanUpAfterTests()
  })
});
