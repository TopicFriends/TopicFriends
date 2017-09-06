import {Component, Input, OnInit} from '@angular/core';
import {
  MeetingAttendanceByUserWithUserData,
  MeetingAttendanceService,
} from '../meeting-attendance.service';
import {DbListReadOnly} from '../../db.service';

@Component({
  selector: 'app-meeting-attendance-user-list',
  templateUrl: './meeting-attendance-user-list.component.html',
  styleUrls: ['./meeting-attendance-user-list.component.scss'],
})
export class MeetingAttendanceUserListComponent implements OnInit {

  userList: DbListReadOnly<MeetingAttendanceByUserWithUserData>;
  attendeesCount: number = 0;

  @Input() meetingId: string;

  constructor(private meetingAttendanceService: MeetingAttendanceService,) {
  }

  ngOnInit() {
    this.userList =
      this.meetingAttendanceService.fetchMeetingAttendanceByUserWithUserData(this.meetingId);

    this.userList.subscribe(list => {
        this.attendeesCount = list.length;
        console.log('fetchMeetingAttendanceByUserWithUserData subscribed: ', list);
    });
  }

  trackByKey(idx, val: MeetingAttendanceByUserWithUserData) {
    return val.meetingAttendanceByUser.$key
  }
}
