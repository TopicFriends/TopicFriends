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

  meetingId: string = this.route.snapshot.params['meetingId'];

  constructor(
              private db: DbService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private meetingAttendanceService: MeetingAttendanceService,
  ) {
    console.log('meetingId: ', this.meetingId)
  }

  ngOnInit() {

    this.retrieveMeetingDetails(this.meetingId); // fixme: misnomer
    this.retrieveCurrentUserMeetingAttendance(this.meetingId);
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
    // FIXME: move to service!
    this.db.objectByPath('Meetings/Meeting/' + meetingId).subscribe((meeting: Meeting) => {
      this.meeting = meeting;
      console.log('retrieveMeetingDetails: ', meeting)
    });
  }
}
