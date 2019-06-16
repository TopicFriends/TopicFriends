import {Component, Input, OnInit} from '@angular/core';
import {
  MeetingAttendanceByUserMatched,
  MeetingAttendanceByUserWithUserData,
  MeetingAttendanceService,
} from '../../meetings-core/meeting-attendance.service';
import {DbListReadOnly} from '../../../shared/db.service';
import {UserMatcherService} from '../../../user-profile-shared/user-matcher.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-meeting-attendance-user-list',
  templateUrl: './meeting-attendance-user-list.component.html',
  styleUrls: ['./meeting-attendance-user-list.component.scss'],
})
export class MeetingAttendanceUserListComponent implements OnInit {

  userListObs: Observable<MeetingAttendanceByUserMatched[]>;
  userList: MeetingAttendanceByUserMatched[];
  attendeesCount: number = 0;

  @Input() meetingId: string;

  constructor(
    private meetingAttendanceService: MeetingAttendanceService,) {
  }

  ngOnInit() {
    this.userListObs =
      this.meetingAttendanceService.meetingAttendanceByUserMatched$(this.meetingId);

    this.userListObs.subscribe(list => {
      this.attendeesCount = list.length;
      this.userList = list
      console.log('fetchMeetingAttendanceByUserWithUserData subscribed: ', list);
    });
  }

  trackByKey(idx, val: MeetingAttendanceByUserMatched) {
    return val.userId
  }
}
