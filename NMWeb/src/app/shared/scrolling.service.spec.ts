import { TestBed, inject } from '@angular/core/testing';

import { ScrollingService } from './scrolling.service';

describe('ScrollingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollingService]
    });
  });

  it('should be created', inject([ScrollingService], (service: ScrollingService) => {
    expect(service).toBeTruthy();
  }));
});
