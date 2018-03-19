import {Component, OnInit} from '@angular/core';
import {Meeting, MeetingsService} from '../shared/meetings.service';
import {ActivatedRoute} from '@angular/router';
import {MeetingAttendanceByUser, MeetingAttendanceService} from '../meeting-list/meeting-attendance.service';
import {AuthService} from '../user-profile-shared/auth.service';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss'],
})
export class MeetingDetailsComponent implements OnInit {

  meetingAttendanceByUser: MeetingAttendanceByUser;
  meeting: Meeting;

  meetingId: string = this.route.snapshot.params['meetingId'];

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private meetingsService: MeetingsService,
              private meetingAttendanceService: MeetingAttendanceService,
              private titleService: Title
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
          console.log('status.going: ' + status.going)
        });
    });
  }

  private retrieveMeetingDetails(meetingId: string) {
    this.meetingsService.retrieveMeetingDetails(meetingId).subscribe((meeting: Meeting) => {
      this.meeting = meeting;
      this.titleService.setTitle(meeting.title + ' - Meeting');
    });
  }
}
