import {Injectable} from '@angular/core';
import {AuthService} from '../user-profile/auth.service';
import {DbList, DbListReadOnly, DbObject, DbService} from '../db.service';
import {
  UserData,
  UserProfileService,
} from '../user-profile/user-profile.service';
import {Observable} from 'rxjs/Observable';

export class MeetingAttendanceByUser {
  $key?: string;
  going: boolean;
  user?: UserData
  whatDoYouExpectFromThisMeeting?: string // FIXME: move to MeetingAttendanceByUserDetails because it can be a long text
}

export class MeetingAttendanceByUserWithUserData {
  public constructor(
    public meetingAttendanceByUser: MeetingAttendanceByUser,
    public userData: UserData
  ) {}
}

@Injectable()
export class MeetingAttendanceService {

  MEETING_ATTENDANCE = 'Meetings/MeetingAttendanceByUser';

  private userId;

  constructor(private authService: AuthService,
              private db: DbService,
              private userProfileService: UserProfileService
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
      console.log("User NOT logged in, NOT changing attendance!");
    }
  }

  retrieveAllAttendeesStatuses(meetingId: string): DbList<MeetingAttendanceByUser> {
    const path = this.buildAllUsersMeetingAttendancePath(meetingId);
    let dbList: DbList<MeetingAttendanceByUser> = this.db.list(path);
    // let mock: DbList<MeetingAttendanceByUser> = Observable.of([{$key: 'qwertyuio', going: true}, {$key: 'qwertyui', going: false}]);
    return dbList;
    // return mock;
  }

  retrieveUserAttendanceStatus(meetingId: string): DbObject<MeetingAttendanceByUser> {
    const path = this.buildUserMeetingAttendancePath(meetingId);
    let dbObject: DbObject<MeetingAttendanceByUser> = this.db.objectByPath(path);
    return dbObject;
  }

  fetchMeetingAttendanceByUserWithUserData(meetingId: string): Observable<MeetingAttendanceByUserWithUserData[]>  {
    let listOfMeetingAttendanceByUser: DbList<MeetingAttendanceByUser> =
      this.retrieveAllAttendeesStatuses(meetingId);

    console.log('Before: listOfMeetingAttendanceByUser.map');
    // consider switchMap
    return listOfMeetingAttendanceByUser.map((meetingAttendanceByUserArray: MeetingAttendanceByUser[]) => {
      console.log("listOfMeetingAttendanceByUser.map", meetingAttendanceByUserArray)
      //TODO: attendees might be null or undefined
      return meetingAttendanceByUserArray.filter(
        (meetingAttendanceByUser: MeetingAttendanceByUser) => {
          return meetingAttendanceByUser.going === true
        }
      ).map((meetingAttendanceByUser: MeetingAttendanceByUser) => {
        let userId = meetingAttendanceByUser.$key;
        let userData = this.userProfileService.userDataById(userId);
        return new MeetingAttendanceByUserWithUserData(
          meetingAttendanceByUser,
          userData
        )
      })
    });
  }

  private buildUserMeetingAttendancePath(meetingId: string): any {
    return this.buildAllUsersMeetingAttendancePath(meetingId) + '/' + this.userId;
  }

  private buildAllUsersMeetingAttendancePath(meetingId: string): any {
    return this.MEETING_ATTENDANCE + '/' + meetingId;
  }
}
