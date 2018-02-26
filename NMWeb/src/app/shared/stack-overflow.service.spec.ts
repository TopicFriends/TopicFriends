import { TestBed, inject } from '@angular/core/testing';

import { StackOverflowService } from './stack-overflow.service';

describe('StackOverflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StackOverflowService]
    });
  });

  xit('should be created', inject([StackOverflowService], (service: StackOverflowService) => {
    expect(service).toBeTruthy();
  }));
});
