import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {initFromObject} from '../util/util';
import {DbObject, DbService} from '../db.service'
import {DomainDbService} from '../domain-db.service'
import {TagEntry} from './tag-entry'
import {TopicInterest, UserInterests} from './user-interests'


export function createTopicsDictionary(topics: TopicInterest[]) {
  let ret = {};
  let i = 0;
  for ( const topic of topics ) {
    ret[i] = topic;
    i++;
  }
  return ret;
}


export class OtherProfile {
  userName?: string;
  url?: string;
  show?: boolean;
}

export class UserOtherProfiles {

  linkedIn?: OtherProfile;
  gitHub?: OtherProfile;
  stackOverflow?: OtherProfile;
  twitter?: OtherProfile;
  facebook?: OtherProfile;
  website?: OtherProfile;

  // Phone number/whatsapp
  // telegram (phone?)
  // google / hangouts
  // slack?

}

/* Rename to UserBasicInfo or UserBasicProfile
* and rename UserData to UserProfile */
export class UserProfile {
  displayName?: string;
  /** old name, for compatibility */
  name?: string;
  photoUrl?: string;
  company?: string;
  role?: string;
  lastSaved?: Date;
}

export class UserData {
  profile?: DbObject<UserProfile>;
  interests?: DbObject<UserInterests>;
  otherProfiles?: DbObject<UserOtherProfiles>;
}

export class UserDataWithDetails {
  profile: UserProfile;
  interests: DbObject<UserInterests>;
  otherProfiles: DbObject<UserOtherProfiles>;
}

export class UserDataFetched {
  profile?: UserProfile;
  interests?: UserInterests;
  otherProfiles?: UserOtherProfiles;
}


@Injectable()
export class UserProfileService {

  // userId = '-KnIHsSBYiDR08YnJog5';
  userId;

  myUserData: UserData;

  constructor(
    private db: DomainDbService,
    private authService: AuthService,
  ) {
    authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userId = user && user.uid;
      this.myUserData = this.db.userDataById(this.userId);
    })

    // this.getWhatUsersWant().subscribe((wuws) => {
    //   console.log('getWhatUsersWant()', wuws);
    //   console.log(
    //     "wuws[0].byInteractionMode.freelance.supply.topics['pushId1'].name;",
    //     wuws[0].byInteractionMode.supplyDemand.freelance.supply.topics['pushId1'].name);
    //   this.saveWhatUserWants('exampleSavedWuw', wuws[0]);
    // })
  }

  public saveUserProfile(
    userProfile: UserProfile, interests: UserInterests,
    otherProfiles: UserOtherProfiles,
  ) {
    userProfile.lastSaved = new Date();
    this.myUserData.profile.update(userProfile);

    /* NOTE: this will be hopefully wrapped in some OOP objects in TS,
     to make it work nicely with other services/components
     */
    const userId = this.userId;
    // this.userProfiles.update(userId, {
    //   displayName: this.authService.userSaved.displayName,
    // }); // FIXME: nasty crude quick stub

    /* separating this into another firebase location, to not have to read all that if we just want
     * to read a list of users */
    // whatUserWants = UserInterests.fromJson({
    //   byInteractionMode: {
    //     supplyDemand: {
    //       freelance: {
    //         supply: {
    //           topics: {
    //             /** note: those push ids, like 'pushId1' are not id-s of the topics (like Angular),
    //              but rather the ids of the association between the topic and whatUserWants.
    //              This is in order to leave the option to have many-to-many
    //              (as we might also add more metadata later, like enabled/disabled, comments, skill level).
    //              And users could be able to have multiple variants of the same skill
    //              enabled/disabled and with different metadata.
    //              This is not needed for MVP, but I would like to
    //              keep that option possible in the data structure.
    //              */
    //             pushId1: {
    //               active: true,
    //               /** For now, for looking for matching users, we can ignore the foreign key (topicId)
    //                * and just compare by name */
    //               topicId: 'someForeignKey_Angular',
    //               name: 'Angular',
    //             },
    //             pushId2: {
    //               active: true,
    //               topicId: 'someForeignKey_Ionic',
    //               name: 'Ionic',
    //             },
    //             pushId3: {
    //               active: true,
    //               name: 'WordPress',
    //               topicId: 'someForeignKey_WordPress',
    //             },
    //           }
    //         }
    //       }
    //     }
    //   }
    // });
    this.myUserData.interests.update(interests);
    this.myUserData.otherProfiles.update(otherProfiles);
  }

  getProfile(): Observable<UserProfile> {
    return this.myUserData.profile;
  }

  getUserOtherProfiles(): Observable<UserOtherProfiles> {
    return this.myUserData.otherProfiles;
  }

  getUserInterests(): Observable<UserInterests> {
    return this.myUserData.interests
  }

  getWhatUsersWant(): Observable<UserInterests[]> {
    return null;
    // return this.whatUserWantsList.map((wuws: any[]) => {
    //   return wuws.map((wuw) => {
    //     return UserInterests.fromJson(wuw.whatUserWants);
    //   });
    // });
  }

  // v TODO: user profile service:
  // v TODO: zrobic funkcje fetchUserDataWithDetailsById()
  // TODO: returns UserDataWithDetails
  fetchUserDataWithDetailsById(id: string): DbObject<UserDataWithDetails> {
    return this.db.userDataWithDetailsById(id);
  }
}
