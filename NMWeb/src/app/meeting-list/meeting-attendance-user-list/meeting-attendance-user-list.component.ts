import {Component, Input, OnInit} from '@angular/core';
import {
  MeetingAttendanceByUserWithUserData,
  MeetingAttendanceService,
} from '../meeting-attendance.service';
import {DbListReadOnly} from '../../db.service';
import {UserMatcherService} from '../../user-profile-shared/user-matcher.service'

@Component({
  selector: 'app-meeting-attendance-user-list',
  templateUrl: './meeting-attendance-user-list.component.html',
  styleUrls: ['./meeting-attendance-user-list.component.scss'],
})
export class MeetingAttendanceUserListComponent implements OnInit {

  userListObs: DbListReadOnly<MeetingAttendanceByUserWithUserData>;
  userList: MeetingAttendanceByUserWithUserData[];
  attendeesCount: number = 0;

  @Input() meetingId: string;

  constructor(
    private meetingAttendanceService: MeetingAttendanceService,) {
  }

  ngOnInit() {
    this.userListObs =
      this.meetingAttendanceService.fetchMeetingAttendanceByUserWithUserData(this.meetingId);

    this.userListObs.subscribe(list => {
      this.attendeesCount = list.length;
      this.userList = list
      console.log('fetchMeetingAttendanceByUserWithUserData subscribed: ', list);
    });
  }

  trackByKey(idx, val: MeetingAttendanceByUserWithUserData) {
    return val.meetingAttendanceByUser.$key
    // TODO: change to val.userData.userId
  }
}
