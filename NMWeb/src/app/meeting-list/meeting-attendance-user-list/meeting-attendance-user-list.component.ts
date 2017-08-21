import {Component, OnInit} from '@angular/core';
import {UserListService} from '../../user-list/user-list.service';
import {ActivatedRoute} from '@angular/router';
import {MeetingAttendanceByUser, MeetingAttendanceService} from '../meeting-attendance.service';
import {AuthService} from '../../user-profile/auth.service';

@Component({
  selector: 'app-meeting-attendance-user-list',
  templateUrl: './meeting-attendance-user-list.component.html',
  styleUrls: ['./meeting-attendance-user-list.component.scss'],
})
export class MeetingAttendanceUserListComponent implements OnInit {

  userList;

  constructor(private userListService: UserListService,
              private meetingAttendanceService: MeetingAttendanceService,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {

    //TODO:
    let meetingId: string;

    this.route.params.subscribe(params => {
      meetingId = params['id'];
    });

    this.userList = this.userListService.listUserDataWithDetails();   //FIXME: all users attending meeting

    this.meetingAttendanceService.retrieveUsersAttendingMeeting(meetingId).subscribe(list => {
      console.log('retrieveUsersAttendingMeeting subscribed: ' + list);
    });
  }

  trackByKey(idx, val) {
    return val.$key
  }
}
