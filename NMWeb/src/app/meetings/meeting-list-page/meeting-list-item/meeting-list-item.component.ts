import {Component, Input, OnInit} from '@angular/core';
import {MeetingAttendanceByUser, MeetingAttendanceService} from '../../meetings-core/meeting-attendance.service';
import {Meeting} from '../../meetings-core/meetings.service';
import {AuthService} from '../../../user-profile-shared/auth.service';

@Component({
  selector: 'app-meeting-list-item',
  templateUrl: './meeting-list-item.component.html',
  styleUrls: ['./meeting-list-item.component.scss']
})
export class MeetingListItemComponent implements OnInit {

  @Input() meeting: Meeting;

  meetingAttendanceByUser: MeetingAttendanceByUser;
  attendeesCount: number = 0;

  constructor(
    private meetingAttendanceService: MeetingAttendanceService,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.meetingAttendanceService.retrieveUserAttendanceStatus(this.meeting.$key)
        .subscribe((status: MeetingAttendanceByUser) => {
          this.meetingAttendanceByUser = status;
          console.log('MeetingListItemComponent, status.goingStatus: ' + status.going)
        });
    })
    console.log('meeting', this.meeting)

    this.meetingAttendanceService.fetchMeetingAttendanceByUserWithUserData(this.meeting.$key)
      .subscribe(list => {
        this.attendeesCount = list.length;
      });
  }
}
