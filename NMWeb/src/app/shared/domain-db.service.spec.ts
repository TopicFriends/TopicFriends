import { TestBed, inject } from '@angular/core/testing';

import { DomainDbService } from './domain-db.service';

describe('DomainDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainDbService]
    });
  });

  it('should be created', inject([DomainDbService], (service: DomainDbService) => {
    expect(service).toBeTruthy();
  }));
});
