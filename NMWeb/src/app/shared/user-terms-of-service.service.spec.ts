import { TestBed, inject } from '@angular/core/testing';

import { UserTermsOfServiceService } from './user-terms-of-service.service';

describe('UserTermsOfServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTermsOfServiceService]
    });
  });

  it('should be created', inject([UserTermsOfServiceService], (service: UserTermsOfServiceService) => {
    expect(service).toBeTruthy();
  }));
});
