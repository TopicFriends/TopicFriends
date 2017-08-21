import {Injectable} from '@angular/core';
import {AuthService} from '../user-profile/auth.service';
import {DbList, DbObject, DbService} from '../db.service';
import {UserDataWithDetails, UserOtherProfiles, UserProfileService} from '../user-profile/user-profile.service';
import {UserInterests} from '../user-profile/user-interests';
import {Observable} from 'rxjs/Observable';
import {resolveRendererType2} from '@angular/core/src/view/util';

export class MeetingAttendanceByUser {
  $key?: string;
  going: boolean;
  user?: UserDataWithDetails
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
    let mock: DbList<MeetingAttendanceByUser> = Observable.of([{$key: 'qwertyuio', going: true}, {$key: 'qwertyui', going: false}]);
    // return dbList;
    return mock;
  }

  retrieveUserAttendanceStatus(meetingId: string): DbObject<MeetingAttendanceByUser> {
    const path = this.buildUserMeetingAttendancePath(meetingId);
    let dbObject: DbObject<MeetingAttendanceByUser> = this.db.objectByPath(path);
    return dbObject;
  }

  retrieveUsersAttendingMeeting(meetingId: string): DbList<MeetingAttendanceByUser>  {    //TODO: Move to existing user attendance service
    let listOfMeetingAttendanceByUser: DbList<MeetingAttendanceByUser> =
      this.retrieveAllAttendeesStatuses(meetingId);

    console.log('Before: listOfMeetingAttendanceByUser.map')
    return listOfMeetingAttendanceByUser.map((attendces: MeetingAttendanceByUser[]) => {
      console.log("listOfMeetingAttendanceByUser.map", attendces)
      return attendces.map(attendeeStatus => { //TODO: attendees może być null or undefined
        let userInterests: DbObject<UserInterests> = null;
        let otherProfiles: DbObject<UserOtherProfiles> = null;
        let userData: UserDataWithDetails = new UserDataWithDetails();
        userData.interests = userInterests;
        userData.otherProfiles = otherProfiles;

        console.log("attendees.map", attendeeStatus)
        this.userProfileService.fetchUserDataWithDetailsById(attendeeStatus.$key)
          .subscribe(data => {
              userData.profile = data
              console.log(" userData.profile = " + userData.profile)
              console.log(" data.profile = " + data.profile)
            },
          );
        return userData;
      })
    });
  }

  /*  this.userHasAgendas = this.userHasAgendaList.map(userHasAgendas => {
    userHasAgendas.map(userHasAgenda => {
     userData.profile = this.userProfileService.fetchUserDataWithDetailsById(attendees.$key);
      return userHasAgenda;
    })
    return userHasAgendas;
  });
*/

  // v przed utworzeniem userdatawithdetails utworzyc dwie zmienne lokalne
  // v jedna dbobject<UserIntertests>, druga dbobject<otherprofiles>
  // v i te dwa wrzucic do userdatawithdetails

  // v utworzyc nowy obiekt userdatawithdetails przed
  // v subscribe i dodac user interests i otherprofiles,
  // a po subscribe zapisac sobie tylko .userprofile
  //

  private buildUserMeetingAttendancePath(meetingId: string): any {
    return this.buildAllUsersMeetingAttendancePath(meetingId) + '/' + this.userId;
  }

  private buildAllUsersMeetingAttendancePath(meetingId: string): any {
    return this.MEETING_ATTENDANCE + '/' + meetingId;
  }
}
