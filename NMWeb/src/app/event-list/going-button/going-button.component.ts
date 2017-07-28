import { Component, OnInit } from '@angular/core';
import { MeetingAttendanceService } from '../meeting-attendance.service';

@Component({
  selector: 'app-going-button',
  templateUrl: './going-button.component.html',
  styleUrls: ['./going-button.component.scss']
})
export class GoingButtonComponent implements OnInit {

  constructor(private meetingAttendanceService: MeetingAttendanceService) {
  }

  ngOnInit() {
  }

  show: boolean = false;

  userAttendsMeeting(choice: boolean) {
    this.show = choice;
    this.meetingAttendanceService.updateAttandance(choice);
  }
}
