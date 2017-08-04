import {Component, Input, OnInit} from '@angular/core';
import { MeetingAttendanceService } from '../meeting-attendance.service';

@Component({
  selector: 'app-going-button',
  templateUrl: './going-button.component.html',
  styleUrls: ['./going-button.component.scss']
})
export class GoingButtonComponent implements OnInit {

  @Input() meeting;       //TODO: change later to meetingID
  show: boolean = false;    //TODO: read from firebase

  constructor(private meetingAttendanceService: MeetingAttendanceService) {
  }

  ngOnInit() {
  }

  ngOnChange() {
    // this.attendanceStatusOfMeeting
  }

  userAttendsMeeting(meetingId: string, choice: boolean) {
    this.show = choice;
    this.meetingAttendanceService.updateAttendance(meetingId, choice);
  }

  attendanceStatusOfMeeting(meetingId: string) {
    this.meetingAttendanceService.retrieveCurrentAttendanceStatus(meetingId);
  }
}
