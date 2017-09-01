import { TestBed, inject } from '@angular/core/testing';

import { UserDescriptionsService } from './user-descriptions.service';

describe('UserDescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDescriptionsService]
    });
  });

  it('should be created', inject([UserDescriptionsService], (service: UserDescriptionsService) => {
    expect(service).toBeTruthy();
  }));
});
