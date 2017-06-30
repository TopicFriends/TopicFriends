import { TestBed, inject } from '@angular/core/testing';

import {UserProfileService, WhatUserWants} from './user-profile.service';

fdescribe('UserProfileService', () => {
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
        {name: 'Firebase'},
      ],
      [
        {name: 'Firebase'},
        {name: 'Angular'},
        {name: 'Ionic'},
      ],
    ).length).toBe(2);
  });
});
