import {UserProfilePage} from './user-profile.po'
import {TopicsSections} from './topic-sections.po'
import {LoginPage} from '../login/login.po'
import {TestAssertions} from '../../test-support/assertions'
import {TestCleanUp} from '../../test-support/clean-up'
import {TestWait} from '../../test-support/wait'
import {TestSupport} from '../../test-support/test-support'
import {$, browser, element, ExpectedConditions, protractor} from 'protractor'

describe('Symmetric topics on Profile page: User', () => {
  let loginPage: LoginPage
  let page: UserProfilePage
  let topicSections: TopicsSections
  let assert: TestAssertions
  let cleanUp: TestCleanUp
  let wait: TestWait
  let support: TestSupport
  let ec = ExpectedConditions

  beforeAll(() => { //TODO: refactor me
    loginPage = new LoginPage()
    page = new UserProfilePage()
    topicSections = new TopicsSections()
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

    assert.tagsMatch(selectedTopic, expectedTopic)
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

    assert.tagsMatch(selectedTopic, expectedTopic);
  });

  // it('nothing selected when no value entered', () => {
    // TODO
  // });

  it('can select multiple topics: Angular, .NET, angular universal', () => {
    let topics = ['Angular', '.NET', 'angular universal']
    let hackathon = topicSections.hackathonSectionSelector
    wait.forElementPresent($(hackathon))

    let selectedTopics = topicSections.inputMultipleTagsInOneSection(hackathon, topics)
    assert.sectionTagsMatch(hackathon, selectedTopics)
  });

  it('can save profile by clicking save', () => {
    let topicsHackathon = ['c', 'angular universal']
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

    page.saveProfileButton.click()
    page.navigateTo().then(() => {
      wait.forElementPresent($(topicSections.tagSelector)).then(() => {
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

  it('can remove all topics from profile', () => {
    wait.forElementPresent($(topicSections.tagSelector))
    topicSections.removeAllTags()

    page.saveProfileButton.click()
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
      browser.driver.switchTo().alert().then(
        function (alert) {
          alert.accept();
        },
        function (error) {
        }
      )
      wait.forElementPresent(page.userProfileBasicInfo)
    })
  })

  afterAll(() => {
    cleanUp.cleanUpAfterTests()
  })
});
