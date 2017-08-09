import {Injectable} from '@angular/core';
import {AuthService} from '../user-profile/auth.service';
import {DbObject, DbService} from '../db.service';
import 'rxjs/add/operator/take';

export class MeetingAttendanceByUser {
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

  updateUserAttendance(meetingId: string, chosenStatus: boolean) {
    if(this.userId) {
      let path = this.buildUserMeetingAttendancePath(meetingId);
      const allAttendance = this.db.objectByPath<MeetingAttendanceByUser>(path);
      let status: MeetingAttendanceByUser = {
                                              going: chosenStatus
                                            };

      allAttendance.set(status);

      console.log("Changing attendance to: " + chosenStatus + "!");
    }
    else {
      // TODO: goingStatus dialog prompting user to log in
      console.log("User NOT logged in, NOT changing attendance!");
    }
  }

  retrieveUserAttendanceStatus(meetingId: string): DbObject<MeetingAttendanceByUser> {
    const path = this.buildUserMeetingAttendancePath(meetingId);
    let dbObject: DbObject<MeetingAttendanceByUser> = this.db.objectByPath(path);
    return dbObject;
  }

  private buildUserMeetingAttendancePath(meetingId: string): any {
    return this.MEETING_ATTENDANCE + '/' + meetingId + '/' + this.userId;
  }
}
