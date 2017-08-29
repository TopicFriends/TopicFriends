import { Injectable } from '@angular/core';
import {DbObject, DbList, DbService} from './db.service'
import {UserOtherProfiles, UserProfile, UserData, UserGeoLocations} from './user-profile/user-profile.service'
import {Observable} from 'rxjs/Observable'
import "rxjs/add/observable/of"

import {UserInterests} from './user-profile/user-interests'
import {combineLatest} from 'rxjs/operator/combineLatest'

@Injectable()
export class DomainDbService {

  USER_DATA = 'UserData/';

  PATHS = {
    USER_PROFILE: this.USER_DATA + 'UserProfile',
    USER_INTERESTS: this.USER_DATA + 'UserInterests',
    OTHER_PROFILES: this.USER_DATA + 'OtherProfiles',
    GEO_LOCATIONS: this.USER_DATA + 'GeoLocations',
  }

  constructor(
    private db: DbService
  ) {

  }

  listUserProfile(): DbList<UserProfile> {
    return this.db.list(this.PATHS.USER_PROFILE)
  }

  listOtherProfiles(): DbList<UserOtherProfiles> {
    return this.db.list(this.PATHS.OTHER_PROFILES);
  }

  listUserInterests(): DbList<UserInterests> {
    return this.db.list(this.PATHS.USER_INTERESTS);
  }


  listUserDataWithDetails(): Observable<UserData[]> {
    return this.listUserProfile().map(list => {
      return list.map(profile => {
          const id = (profile as any).$key;
          const mapped: UserData = new UserData(
            Observable.of(profile),
            this.userInterestsById(id),
            this.otherProfilesById(id),
          )
          return mapped;
        }
      )
    });
  }

  userProfileById(id: string): DbObject<UserProfile> {
    return this.db.objectById(this.PATHS.USER_PROFILE, id);
  }

  otherProfilesById(id: string): DbObject<UserOtherProfiles> {
    return this.db.objectById(this.PATHS.OTHER_PROFILES, id);
  }

  userInterestsById(id: string): DbObject<UserInterests> {
    return this.db.objectById(this.PATHS.USER_INTERESTS, id);
  }

  userGeoLocationsById(userId: string): DbObject<UserGeoLocations> {
    return this.db.objectById(this.PATHS.GEO_LOCATIONS, userId);
  }

  userDataById(userId: string): UserData {
    return {
      profile: this.userProfileById(userId),
      otherProfiles: this.otherProfilesById(userId),
      interests: this.userInterestsById(userId),
      geoLocations: this.userGeoLocationsById(userId),
    }
  }

}
