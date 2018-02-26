import { TestBed, inject } from '@angular/core/testing';

import { UserGroupService } from './user-group.service';

describe('UserGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGroupService]
    });
  });

  xit('should be created', inject([UserGroupService], (service: UserGroupService) => {
    expect(service).toBeTruthy();
  }));
});
