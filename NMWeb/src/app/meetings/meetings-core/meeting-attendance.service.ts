import {Injectable} from '@angular/core';
import {AuthService} from '../../user-profile/user-profile-shared/auth.service';
import {DbList, DbObject, DbService} from '../../shared/db.service';
import {
  UserData,
  UserDataCombined,
  UserProfileService,
} from '../../user-profile/user-profile-core/user-profile.service';
import {Observable} from 'rxjs/Observable';
import { UserMatched } from '../../user-profile/user-profile-core/user-matcher.service'
import { combineLatest } from 'rxjs/observable/combineLatest'

export class MeetingAttendanceByUser {
  $key?: string;
  going: boolean;
  // user?: UserData
  whatDoYouExpectFromThisMeeting?: string // FIXME: move to MeetingAttendanceByUserDetails because it can be a long text
}

export class MeetingAttendanceByUserWithUserData {
  public constructor(
    public meetingAttendanceByUser: MeetingAttendanceByUser,
    public userData: UserData,
  ) {}
}

export class MeetingAttendanceByUserDataCombined {
  public constructor(
    public meetingAttendanceByUser: MeetingAttendanceByUser,
    public userDataCombined: UserDataCombined,
  ) {}
}

export class MeetingAttendanceByUserMatched {
  userId = this.userMatched.userId

  public constructor(
    public meetingAttendanceByUser: MeetingAttendanceByUser,
    public userMatched: UserMatched,
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

  meetingAttendanceByUserMatched$(meetingId: string): Observable<MeetingAttendanceByUserMatched[]>  {
    return this.userProfileService.observeLoggedUserProfile().switchMap(loggedUserDataCombined => {
      return this.meetingAttendanceByUserCombined$(meetingId).map(arr => {
        return arr.map(meetingAttendanceByUserDataCombined => {
          return new MeetingAttendanceByUserMatched(
            meetingAttendanceByUserDataCombined.meetingAttendanceByUser,
            new UserMatched(meetingAttendanceByUserDataCombined.userDataCombined, loggedUserDataCombined))
        })
      })
    })
  }

  meetingAttendanceByUserCombined$(meetingId: string): Observable<MeetingAttendanceByUserDataCombined[]>  {
    const observable: Observable<MeetingAttendanceByUserWithUserData[]> = this.fetchMeetingAttendanceByUserWithUserData(meetingId)

    return observable.switchMap(arrayOfMeetingAttendanceByUserData => {
      interface Temp {
        userDataCombined: UserDataCombined
        meetingAttendanceByUser: MeetingAttendanceByUser
      }
      const arrayOfObservables: Array<Observable<Temp>> = arrayOfMeetingAttendanceByUserData.map(meetingAttendanceByUserData => {
        const intermediate$ = meetingAttendanceByUserData.userData.combineLatest().map(userDataCombined => ({
          meetingAttendanceByUser: meetingAttendanceByUserData.meetingAttendanceByUser,
          userDataCombined: userDataCombined
        }))
        return intermediate$
      })
      const observable1: Observable<Temp[]> = combineLatest<Temp>(arrayOfObservables)
      const observable2: Observable<MeetingAttendanceByUserDataCombined[]> = observable1.map(arr => arr.map(_ =>
        {
          return new MeetingAttendanceByUserDataCombined(
            _.meetingAttendanceByUser, _.userDataCombined
          )
        }
      ))
      return observable2
      // const combineLatest1: Observable<UserDataCombined[]> = combineLatest<UserDataCombined>(arrayOfObservables)
    })
  }

  fetchMeetingAttendanceByUserWithUserData(meetingId: string): Observable<MeetingAttendanceByUserWithUserData[]>  {
    let listOfMeetingAttendanceByUser: DbList<MeetingAttendanceByUser> =
      this.retrieveAllAttendeesStatuses(meetingId);

    console.log('Before: listOfMeetingAttendanceByUser.map')
    // consider switchMap
    return listOfMeetingAttendanceByUser.map((meetingAttendanceByUserArray: MeetingAttendanceByUser[]) => {
      console.log("listOfMeetingAttendanceByUser.map", meetingAttendanceByUserArray)
      //TODO: attendees might be null or undefined
      return meetingAttendanceByUserArray.filter(
        (meetingAttendanceByUser: MeetingAttendanceByUser) => {
          return meetingAttendanceByUser.going
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

  private buildUserMeetingAttendancePathForUser(userId: string, meetingId: string) {
    return this.buildAllUsersMeetingAttendancePath(meetingId) + '/' + userId;
  }
}
