import { WhatUserWants } from './user-profile.service';
import { ExampleData } from './what-user-wants.example-data';

describe('UserProfileService: getTopicMatchesWithinInteractionMode()', () => {
  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   providers: [UserProfileService]
    // });
  });

  it('should be created', () => {
    expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
      [], []
    ).length).toBe(0);
  });

  it('should be created 2', () => {
    expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
      [
        {name: 'Angular'}
      ], []
    ).length).toBe(0);
  });

  it('should be created 2 2', () => {
    expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
      [],
      [
        {name: 'Angular'}
      ],
    ).length).toBe(0);
  });

  it('should be created 3', () => {
    expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
      [
        {name: 'Angular'}
      ], [
        {name: 'Angular'}
      ]
    ).length).toBe(1);
  });
  it('should be created 4', () => {
    expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
      [
        {name: 'Angular'},
        {name: 'Ionic'},
      ],
      [
        {name: 'Angular'},
        {name: 'Firebase'},
      ],
    ).length).toBe(1);
  });

  it('should be created 4 2', () => {
    expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
      [
        {name: 'Angular'},
        {name: 'Firebase'},
      ],
      [
        {name: 'Angular'},
        {name: 'Ionic'},
      ],
    ).length).toBe(1);
  });

  it('should be created 5 1', () => {
    expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
      [
        {name: 'Angular'},
        {name: 'TypeScript'},
        {name: 'Firebase'},
      ],
      [
        {name: 'TypeScript'},
        {name: 'Firebase'},
        {name: 'Angular'},
        {name: 'Ionic'},
      ],
    ).length).toBe(3);
  });
});


let whatUserWants: WhatUserWants;
let testData: ExampleData;

fdescribe('UserProfileService: getInterestsMatchWith()', () => {

  beforeAll(() => {
    testData = new ExampleData();
  });

  it('nothing supplied, should be matched: 0', () => {
    whatUserWants = WhatUserWants.fromJson(null);
    expect(whatUserWants.getInterestsMatchWith(whatUserWants).matchScore).toBe(0);
  });

  it('supplied non-matching (disjoint sets) supply-demand, should be matched: 0', () => {
    let userExchangeDetails = testData.createWhatUserWants(testData.topics_Ionic, false);
    let othersExchangeDetails = testData.createWhatUserWants(testData.topics_Android, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
  });

  it('supplied nothing supply-demand, should be matched: 0', () => {
    let userExchangeDetails = testData.createWhatUserWants(null, false);
    let othersExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroidAngular, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
  });

  it('supplied non-matching supply-demand, nothing for others, should be matched: 0', () => {
    let userExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroidAngular, false);
    let othersExchangeDetails = testData.createWhatUserWants(null, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
  });

  it('supplied - 1 for each - matching supply-demand, should be matched: 1', () => {
    let userExchangeDetails = testData.createWhatUserWants(testData.topics_Android, false);
    let othersExchangeDetails = testData.createWhatUserWants(testData.topics_Android, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(1);
  });

  it('supplied - all - matching supply-demand, should be matched: 3', () => {
    let userExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroidAngular, false);
    let othersExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroidAngular, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(3);
  });

  it('supplied - 2 out of 3 - matching supply-demand, should be matched: 2', () => {
    let userExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroid, false);
    let othersExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroidAngular, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(2);
  });

  it('supplied - 2 out of 3 - matching supply-demand, should be matched: 2', () => {
    let userExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroidAngular, false);
    let othersExchangeDetails = testData.createWhatUserWants(testData.topics_IonicAndroid, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(2);
  });

});
