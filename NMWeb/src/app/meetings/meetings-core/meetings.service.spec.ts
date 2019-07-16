import { TestBed, inject } from '@angular/core/testing';

import { MeetingsService } from './meetings.service';

describe('MeetingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingsService]
    });
  });

  xit('should be created', inject([MeetingsService], (service: MeetingsService) => {
    expect(service).toBeTruthy();
  }));
});
