import {Injectable, Input} from '@angular/core';
import {AuthService} from '../user-profile/auth.service';
import {DbObject, DbService} from '../db.service';
import 'rxjs/add/operator/take';

export class MeetingAttendance {
  going: boolean
}

@Injectable()
export class MeetingAttendanceService {

  MEETING_ATTENDANCE = 'MeetingAttendanceByUser';

  private userId;

  constructor(private authService: AuthService,
              private db: DbService
  ) {

    authService.user.subscribe(user => {
      this.userId = user && user.uid;
    });
  }

  updateAttendance(meetingId: string, choice: boolean) {
    if(this.userId) {
      let path = this.buildUserMeetingAttendancePath(meetingId);
      const allAttendance = this.db.objectByPath<MeetingAttendance>(path);

      allAttendance.set({
        going: choice
      });

      console.log("Changing attendance to: " + choice + "!");
    }
    else {
      // TODO: goingStatus dialog prompting user to log in
      console.log("User NOT logged in, NOT changing attendance!");
    }
  }

  retrieveUserCurrentAttendanceStatus(meetingId: string): DbObject<MeetingAttendance> {
    const path = this.buildUserMeetingAttendancePath(meetingId);
    let dbObject: DbObject<MeetingAttendance> = this.db.objectByPath(path);
    return dbObject;
  }

  private buildUserMeetingAttendancePath(meetingId: string): any {
    return this.MEETING_ATTENDANCE + '/' + meetingId + '/' + this.userId;
  }
}
