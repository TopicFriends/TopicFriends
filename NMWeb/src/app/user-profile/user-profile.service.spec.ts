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
    expect(whatUserWants.getInterestsMatchWith(whatUserWants)).toBe(0);
  });

  it('suppliled non-matching supply-demand, should be matched: 0', () => {
    let userExchangeDetails = testData.createWhatUserWants(testData.topics_GraphicDesign, false);
    let othersExchangeDetails = testData.createWhatUserWants(testData.topics_Default, false);

    let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
    expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails)).toBe(0);
  });
});
