import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {DbObject} from '../db.service'
import {DomainDbService} from '../domain-db.service'
import {TopicInterest, UserInterests} from './user-interests'
import {DbHistory, HasDbHistory} from '../util/history'

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


export class UserDescription {
  text: string
}

export class UserDescriptions {
  descriptions: { /* or textDescriptions. For future: ask myself, what other descriptions can there be apart from textual?
    graphics? That would probably go into another firebase node...
    What graphics? Background? User map pin? This is not a description.
    TODO: rename the whole Firebase list-root-node to UserTextDescriptions ?
  */
    myDescription: UserDescription, /* or userDescription? */
    whatDoYouExpectFromTheApp: UserDescription,
    adviceOnContactingMe: UserDescription, /* TODO: contacting / meeting */
    howDidYouFindThisCommunity: UserDescription, /* TODO: standardize this/the, app/community -> this community */
  }
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

export class GeoLocation {
  constructor(
    public latitude: number,
    public longitude: number,
  ) {}

  static parseGeoString(geoString: string): GeoLocation {
    if ( geoString && geoString.trim().length > 0 ) {
      const split = geoString.split(',')

      const lat = parseFloat(split[0].trim())
      const lng = parseFloat(split[1].trim())
      return new GeoLocation(lat, lng)
    } else {
      return null
    }
  }

}

export interface GeoLocationsDictionary {
  [geoLocationId: number]: GeoLocation
}

export class UserGeoLocations {
  geoLocations: {
    whereIWork?: GeoLocationsDictionary // Todo: multiple (dictionary)
    whereILive?: GeoLocationsDictionary
    whereIStudy?: GeoLocationsDictionary
    whereIVisit?: GeoLocationsDictionary
    homeTown?: GeoLocationsDictionary
    // where I have lunch
    // where I party
    // where I hang out
    // things like Javier going to Fuengirola...
    // home town / where I grew up
    // where I have a beer/tapas/etc / chill out
    // where I am right now (e.g. on a conference)
    // where I travel/visit
    // where I give talks/workshops
    // where I go biking
    // where I go to the gym/sports
  }
}

/* Rename to UserBasicInfo(not: too vague: info, like data; I shall avoid vague names) or *UserBasicProfile*
* and rename UserData to UserProfile */
export class UserProfile implements HasDbHistory {
  displayName?: string;
  /** old name, for compatibility */
  name?: string;
  photoUrl?: string;
  company?: string;
  role?: string;
  lastSaved?: Date;
  $key?: string;
}

export class UserData {
  public constructor(
    public profile: DbObject<UserProfile>,
    public interests: DbObject<UserInterests>,
    public otherProfiles: DbObject<UserOtherProfiles>,
    public geoLocations?: DbObject<UserGeoLocations>,
    public descriptions?: DbObject<UserDescriptions>,
  ) {}

  history?: DbHistory
}


// export class UserDataWithDetails {
//   profile: UserProfile; // user UserData class and replace this by ScalarObservaable<UserProfile> to unify
//   interests: DbObject<UserInterests>;
//   otherProfiles: DbObject<UserOtherProfiles>;
// }

// export class UserDataFetched {
//   profile: UserProfile;
//   interests: UserInterests;
//   otherProfiles: UserOtherProfiles;
// }


@Injectable()
export class UserProfileService {

  fakeUser = 'fakeUser'


  // userId = '-KnIHsSBYiDR08YnJog5';
  userId;

  myUserData: UserData;

  constructor(
    private db: DomainDbService,
    private authService: AuthService,
  ) {
    authService.user.subscribe(user => {
      this.userId = user && user.uid;
      // this.userId = this.fakeUser;
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
    userProfile: UserProfile,
    interests: UserInterests,
    otherProfiles: UserOtherProfiles,
    userGeoLocations: UserGeoLocations,
    userDescriptions: UserDescriptions,
  ) {
// <<<<<<< Updated upstream
    userProfile.lastSaved = new Date();
    this.myUserData.profile.update(userProfile); // fixme: use service method
// =======
//     userProfile.history ; // FIXME
// >>>>>>> Stashed changes


    /* NOTE: this will be hopefully wrapped in some OOP objects in TS,
     to make it work nicely with other services/components
     */
    const userId = this.fakeUser;
    // const userId = this.userId;
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
    this.myUserData.geoLocations.update(userGeoLocations);
    this.myUserData.descriptions.update(userDescriptions);
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

  getUserGeoLocations(): Observable<UserGeoLocations> {
    return this.myUserData.geoLocations
  }

  getWhatUsersWant(): Observable<UserInterests[]> {
    return null;
    // return this.whatUserWantsList.map((wuws: any[]) => {
    //   return wuws.map((wuw) => {
    //     return UserInterests.fromJson(wuw.whatUserWants);
    //   });
    // });
  }

  // TODO: returns UserDataWithDetails
  // fetchUserDataWithDetailsById(id: string): Observable<UserDataWithDetails> {
  //   return this.listUserProfile().map(list => {
  //     return list.map(profile => {
  //         const id = (profile as any).$key;
  //         const mapped: UserDataWithDetails = {
  //           profile: profile,
  //           otherProfiles: this.otherProfilesById(id),
  //           interests: this.userInterestsById(id),
  //         }
  //         return mapped;
  //       }
  //     )
  //   });
  // }

  userDataById(userId: string): UserData {
    return this.db.userDataById(userId)
  }

}
