import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingAttendanceService } from './meeting-attendance.service'
import { MeetingsService } from './meetings.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MeetingsService,
    MeetingAttendanceService,
  ]
})
export class MeetingsCoreModule { }
