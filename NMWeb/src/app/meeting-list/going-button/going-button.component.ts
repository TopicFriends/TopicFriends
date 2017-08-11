import {Component, Input, OnInit} from '@angular/core';
import {MeetingAttendanceByUser, MeetingAttendanceService} from '../meeting-attendance.service';
import {Meeting} from '../../shared/meetings.service';

@Component({
  selector: 'app-going-button',
  templateUrl: './going-button.component.html',
  styleUrls: ['./going-button.component.scss']
})
export class GoingButtonComponent implements OnInit {

  @Input() meeting: Meeting;
  @Input() meetingAttendanceByUser: MeetingAttendanceByUser;

  constructor(private meetingAttendanceService: MeetingAttendanceService) {
  }

  ngOnInit() {
  }

  // FIXME: Don't change button status when user NOT logged in and show dialog prompting user to log in
  // Can also change button status, prompt, if canceled then revert button value change.
  updateUserMeetingAttendance(chosenStatus: boolean) {
    this.meetingAttendanceByUser.going = chosenStatus;
    this.meetingAttendanceService.updateUserAttendance(this.meeting.$key, chosenStatus);
  }
}
