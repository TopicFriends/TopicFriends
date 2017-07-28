import { TestBed, inject } from '@angular/core/testing';

import { MeetingsService } from './meetings.service';

describe('MeetingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingsService]
    });
  });

  it('should be created', inject([MeetingsService], (service: MeetingsService) => {
    expect(service).toBeTruthy();
  }));
});
