import { TestBed, inject } from '@angular/core/testing';

import { UserMatcherService } from './user-matcher.service';

describe('UserMatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMatcherService]
    });
  });

  xit('should be created', inject([UserMatcherService], (service: UserMatcherService) => {
    expect(service).toBeTruthy();
  }));
});
