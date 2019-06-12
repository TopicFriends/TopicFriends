import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingAttendanceService } from './meeting-attendance.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MeetingAttendanceService,
  ]
})
export class MeetingsCoreModule { }
