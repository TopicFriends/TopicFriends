import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {DbObject} from '../db.service'
import {DomainDbService} from '../domain-db.service'
import {MatchResults, TopicInterest, UserInterests} from './user-interests'
import {DbHistory, HasDbHistory} from '../util/history'
import 'rxjs/add/observable/never'
import {combineLatest} from 'rxjs/observable/combineLatest'
import 'rxjs/add/observable/empty'
import {UserSkillLevelsPerUser} from './user-skills.service'
import {UserOtherProfiles} from './user-other-profiles.service'

// TODO: massive refactor and split it per separate features

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

export class GeoLocation {
  constructor(
    public latitude: number,
    public longitude: number,
    public title?: Observable<string>,
    public userId?: string,
    public matchResults?: Observable<MatchResults>,
  ) {
    if ( this.title === undefined ) {
      this.title = null; // for firebase
    }
    if ( this.userId === undefined ) {
      this.userId = null; // for firebase
    }
    if ( this.matchResults === undefined ) {
      this.matchResults = null; // for firebase
    }
  }

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

  static clone(it: GeoLocation): GeoLocation {
    return new GeoLocation(
      it.latitude,
      it.longitude,
      it.title,
      it.userId,
      it.matchResults
    )
  }

}

export interface GeoLocationsDictionary {
  [geoLocationId: number]: GeoLocation
}


export class GeoLocations {
    whereIWork?: GeoLocationsDictionary
    whereILive?: GeoLocationsDictionary
    whereIStudy?: GeoLocationsDictionary
    whereIStudied?: GeoLocationsDictionary // TODO / universityTown
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

export class UserGeoLocations {
  geoLocations: GeoLocations

  public static appendUserGeoLocations(userLocation: UserGeoLocations, allUsersGeoLocationsFlattened: GeoLocation[]) {
    if(userLocation && userLocation.geoLocations) {
      for (let subLocationKey of Object.keys(userLocation.geoLocations)) {
        const subLocation: GeoLocationsDictionary = userLocation.geoLocations[subLocationKey]
        // console.log('getAllUserGeoLocations: subLocation', subLocation)
        for (let subLocationMultiKey of Object.keys(subLocation)) {
          let subLocationMulti: GeoLocation = subLocation[subLocationMultiKey]

          // console.log('getAllUserGeoLocations: subLocationMulti', subLocationMulti)
          if (subLocationMulti) {
            subLocationMulti = GeoLocation.clone(subLocationMulti)
            let userId = (<any>userLocation).$key
            subLocationMulti.userId = userId

            allUsersGeoLocationsFlattened.push(subLocationMulti)
          }
        }
      }

    }
  }

  static getAllGeoLocationsOfUsersDataCombined(usersDataCombined: UserDataCombined[]) {
    let flattenedGeoLocations: GeoLocation[] = [];
    for(let userDataCombined of usersDataCombined) {
      let userGeoLocations = userDataCombined.geoLocations
      UserGeoLocations.appendUserGeoLocations(userGeoLocations, flattenedGeoLocations)
    }
    return flattenedGeoLocations
  }

  /** This will be refactored to use UserMatcherService **/
  static appendAllGeoLocations(userLocation, allUsersGeoLocationsFlattened: any[], userMatcherService, userProfileService) {
    if (userLocation && userLocation.geoLocations) {
      for (let subLocationKey of Object.keys(userLocation.geoLocations)) {
        const subLocation: GeoLocationsDictionary = userLocation.geoLocations[subLocationKey]
        // console.log('getAllUserGeoLocations: subLocation', subLocation)
        for (let subLocationMultiKey of Object.keys(subLocation)) {
          let subLocationMulti: GeoLocation = subLocation[subLocationMultiKey]

          // console.log('getAllUserGeoLocations: subLocationMulti', subLocationMulti)
          if (subLocationMulti) {
            subLocationMulti = GeoLocation.clone(subLocationMulti)
            let userId = (<any>userLocation).$key
            subLocationMulti.matchResults = userMatcherService.observeMatchResultsWithAnotherUserByIdOnceLoggedIn(userId)
            subLocationMulti.title = userProfileService.userDataById(userId).profile.map((it: UserProfile) => {
              return it.displayName
            })
            subLocationMulti.userId = userId
            allUsersGeoLocationsFlattened.push(subLocationMulti)
          }
        }
      }
    }
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
  history?: DbHistory;
}



export class UserData {
  public constructor(
    public userId,
    public profile: DbObject<UserProfile>,
    public interests: DbObject<UserInterests>,
    public skills: DbObject<UserSkillLevelsPerUser>,
    public otherProfiles: DbObject<UserOtherProfiles>,
    public geoLocations?: DbObject<UserGeoLocations>,
    public descriptions?: DbObject<UserDescriptions>,
  ) {}

  public combineLatest(): Observable<UserDataCombined> {
    let userData = this
    return combineLatest(
      userData.profile,
      userData.interests,
      // TODO: Skills
      userData.otherProfiles,
      userData.geoLocations,
      userData.descriptions,
      (profile, interests, otherProfiles, geoLocations, descriptions) => {
        // console.log('combineFunction', profile, interests, otherProfiles, geoLocations, descriptions)
        return new UserDataCombined(
          this,
          userData.userId,
          profile,
          interests,
          otherProfiles,
          geoLocations,
          descriptions,
        )
      }
    )
  }

  history?: DbHistory
}

export class UserDataCombined {
  public constructor(
    public userData: UserData,
    public userId,
    public profile: UserProfile,
    public interests: UserInterests,
    public otherProfiles: UserOtherProfiles,
    public geoLocations: UserGeoLocations,
    public descriptions: UserDescriptions,
  ) {}

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
    skills: UserInterests,
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
    this.myUserData.skills.update(skills);

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

  userDataByIdCombined(userId: string): Observable<UserDataCombined> {
    const userData = this.userDataById(userId)
    return userData.combineLatest()
  }

  /* Potential rename: observeLoggedUserInterests */
  getUserInterestsOnceLoggedIn(): Observable<UserInterests> {
    return this.authService.user.switchMap(user => {
      if (user) {
        return this.getUserInterests()
      } else {
        return <any>Observable.never // consider Observable.empty
      }
    })
  }

  observeLoggedUserProfile(): Observable<UserDataCombined> {
    return this.authService.user.switchMap(user => {
      if ( user ) {
        return this.userDataByIdCombined(user.uid)
      } else {
        return Observable.of(null) // consider Observable.empty / never
      }
    })
  }
}
