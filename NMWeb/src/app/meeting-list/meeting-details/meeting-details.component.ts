import {Component, OnInit} from '@angular/core';
import {Meeting} from '../../shared/meetings.service';
import {DbService} from '../../db.service';
import {ActivatedRoute} from '@angular/router';
import {MeetingAttendanceByUser, MeetingAttendanceService} from '../meeting-attendance.service';
import {AuthService} from '../../user-profile/auth.service';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss'],
})
export class MeetingDetailsComponent implements OnInit {

  meetingAttendanceByUser: MeetingAttendanceByUser;
  meeting: Meeting;

  constructor(
              private db: DbService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private meetingAttendanceService: MeetingAttendanceService,
  ) {
  }

  ngOnInit() {
    let meetingId: string;

    this.route.params.subscribe(params => {
      meetingId = params['id'];
    });

    this.retrieveMeetingDetails(meetingId);
    this.retrieveCurrentUserMeetingAttendance(meetingId);
  }

  private retrieveCurrentUserMeetingAttendance(meetingId: string) {
    this.authService.user.subscribe(user => {
      this.meetingAttendanceService.retrieveUserAttendanceStatus(meetingId)
        .subscribe((status: MeetingAttendanceByUser) => {
          this.meetingAttendanceByUser = status;
          console.log('MeetingListItemComponent, status.goingStatus: ' + status.going)
        });
    });
  }

  private retrieveMeetingDetails(meetingId: string) {
    this.db.objectByPath('Meetings/Meeting/' + meetingId).subscribe((meeting: Meeting) => {
      this.meeting = meeting;
    });
  }
}
