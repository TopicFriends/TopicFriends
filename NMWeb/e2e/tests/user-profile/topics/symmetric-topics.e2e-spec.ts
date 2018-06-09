import {UserProfilePage} from '../user-profile.po'
import {TopicsSections} from './topic-sections.po'
import {LoginPage} from '../../login/login.po'
import {TestAssertions} from '../../../test-support/assertions'
import {TestCleanUp} from '../../../test-support/clean-up'
import {TestWait} from '../../../test-support/wait'
import {TestSupport} from '../../../test-support/test-support'
import {$, $$, browser} from 'protractor'
import {ProtractorWrapper} from '../../../test-support/protractor-wrapper'

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
    })

    wait.forElementPresent(page.acceptCookiesButton).then(() => {
      ptor.click(page.acceptCookiesButton)
    })
  })

  function testTopicTagCanBeAdded(topic: string) {
    let exchange = topicSections.exchangeSectionSelector
    topicSections.inputTopic(exchange, topic)
    browser.sleep(500)
    let selectedTopic = topicSections.selectFirstSuggestedTag(topicSections.assembleTopicInputLocator(exchange))
    let expectedTopic = topicSections.returnSelectedSectionTags(exchange)

    console.log('section: exchange')
    assert.tagsMatch(selectedTopic, expectedTopic)
  }

  it('can fill in profile with autocomplete by keyboard', () => {
    let topic = 'Kar'
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

  it('can enter first topic from list without searching', () => {
    let selectedTopic = topicSections.selectFirstSuggestedTag(
      topicSections.assembleTopicInputLocator(topicSections.pairProgrammingSectionSelector))

    let expectedTopic = topicSections.returnSelectedSectionTags(topicSections.pairProgrammingSectionSelector)

    console.log('section: pairProgramming')
    assert.tagsMatch(selectedTopic, expectedTopic);
  });

  // it('nothing selected when hitting ENTER with no search term', () => {
    // TODO
  // });

  it('can select multiple topics: Typescript, .NET, universal', () => {
    let topics = ['Typescript', '.NET', 'universal']
    let hackathon = topicSections.hackathonSectionSelector

    let selectedTopics = topicSections.inputMultipleTagsInOneSection(hackathon, topics)

    console.log('section: hackathon')
    assert.sectionTagsMatch(hackathon, selectedTopics)
  });

  it('can save profile by clicking save', () => {
    let topicsHackathon = ['c', 'universal']
    let topicsSectionHackathon = topicSections.hackathonSectionSelector
    wait.forElementPresent($(topicsSectionHackathon))
    let selectedTopicsHackathon = topicSections.inputMultipleTagsInOneSection(topicsSectionHackathon, topicsHackathon)
    console.log('section: hackathon')
    assert.sectionTagsMatch(topicsSectionHackathon, selectedTopicsHackathon)

    let topicsPairProgramming = ['Java', 'unity', 'ui', 'Protractor']
    let topicsSectionPairProgramming = topicSections.pairProgrammingSectionSelector
    let selectedTopicsPairProgramming = topicSections.inputMultipleTagsInOneSection(topicsSectionPairProgramming, topicsPairProgramming)
    console.log('section: pairProgramming')
    assert.sectionTagsMatch(topicsSectionPairProgramming, selectedTopicsPairProgramming)

    let topicsExchange = ['SQL']
    let topicsSectionExchange = topicSections.exchangeSectionSelector
    let selectedTopicsExchange = topicSections.inputMultipleTagsInOneSection(topicsSectionExchange, topicsExchange)

    console.log('section: exchange')
    assert.sectionTagsMatch(topicsSectionExchange, selectedTopicsExchange)

    page.saveProfileByClickingSaveButton()
    let expectedTagsCount = topicsHackathon.length + topicsPairProgramming.length + topicsExchange.length
    page.navigateTo().then(() => {
      wait.forElementCount($$(topicSections.tagSelector), expectedTagsCount).then(() => {
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

    page.saveProfileByClickingSaveButton()
    let expectedTagsCount = topicsHackathon.length + topicsPairProgramming.length
    page.navigateTo().then(() => {
      wait.forElementCount($$(topicSections.tagSelector), expectedTagsCount).then(() => {
        console.log('section: pairProgramming')
        assert.sectionTagsMatch(topicsSectionPairProgramming, selectedTopicsPairProgramming)

        console.log('section: exchange')
        assert.sectionTagsMatch(topicsSectionExchange, selectedTopicsExchange)
      })
    })
  });

  it('can remove all topics from profile', () => {
    console.log('can remove all topics from profile')
    wait.forElementPresent($(topicSections.tagSelector))
    topicSections.removeAllTags()

    page.saveProfileByClickingSaveButton()
    browser.refresh().then(() => {
      browser.sleep(5000)
      topicSections.allTagsClosings().count().then(result => {
        expect(result).toBe(0, 'Not all tags removed')
      })
    })
  })

  xit('save with keyboard', () => {

  })

  afterEach(() => {
    page.navigateTo().then(() => {
      support.acceptAlertIfAppears()
      wait.forElementPresent($(topicSections.hackathonSectionSelector))
    })
  })

  afterAll(() => {
    cleanUp.cleanUpAfterTests()
  })
})
