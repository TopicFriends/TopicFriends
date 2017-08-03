import {Injectable, Input} from '@angular/core';
import {AuthService} from '../user-profile/auth.service';
import {DbService} from '../db.service';

@Injectable()
export class MeetingAttendanceService {

  MEETING_ATTENDANCE = 'MeetingAttendanceByUser';

  private userId;

  constructor(private authService: AuthService,
              private db: DbService
  ) {
    //this.userId = this.authService.user;

    authService.user.subscribe(user => {
      this.userId = user && user.uid;
    });
  }

  updateAttendance(meetingId: string, choice: boolean) {
    if(this.userId) {
      let path = this.buildUserMeetingAttendancePath(meetingId);
      const allAttendance = this.db.objectByPath(path);

      allAttendance.set({
        going: choice
      });

      console.log("Changing attendance to: " + choice + "!");
    }
    else {
      // TODO: show dialog prompting user to log in
      console.log("User NOT logged in, NOT changing attendance!");
    }
  }

  retrieveCurrentAttendanceStatus(meetingId: string): any {
    this.buildUserMeetingAttendancePath(meetingId);
    // return (current) status
  }

  private buildUserMeetingAttendancePath(meetingId: string) {
    return this.MEETING_ATTENDANCE + '/' + meetingId + '/' + this.userId;
  }
}
