import {Component, Input, OnInit} from '@angular/core';
import { MeetingAttendanceService } from '../meeting-attendance.service';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {Meeting} from '../../shared/meetings.service';

@Component({
  selector: 'app-going-button',
  templateUrl: './going-button.component.html',
  styleUrls: ['./going-button.component.scss']
})
export class GoingButtonComponent implements OnInit {

  @Input() meeting: Meeting;       //TODO: change later to meetingID
  @Input() goingStatus: boolean;

  constructor(private meetingAttendanceService: MeetingAttendanceService) {
  }

  ngOnInit() {
  }

  updateUserAttendance(meetingId: string, choice: boolean) {
    this.goingStatus = choice;
    this.meetingAttendanceService.updateAttendance(meetingId, choice);
  }

  // getMeetingAttendanceStatus(meetingId: string): any {
  //   return this.meetingAttendanceService.retrieveUserCurrentAttendanceStatus(meetingId);
  // }
}
