import { TestBed, inject } from '@angular/core/testing';

import { UserOtherProfilesService } from './user-other-profiles.service';

describe('UserOtherProfilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserOtherProfilesService]
    });
  });

  it('should be created', inject([UserOtherProfilesService], (service: UserOtherProfilesService) => {
    expect(service).toBeTruthy();
  }));
});
