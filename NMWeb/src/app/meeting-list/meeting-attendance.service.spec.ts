import { TestBed, inject } from '@angular/core/testing';

import { MeetingAttendanceService } from './meeting-attendance.service';

describe('MeetingAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingAttendanceService]
    });
  });

  it('should be created', inject([MeetingAttendanceService], (service: MeetingAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
