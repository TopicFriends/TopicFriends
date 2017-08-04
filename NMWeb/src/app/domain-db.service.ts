import { Injectable } from '@angular/core';
import {DbObject, DbList, DbService} from './db.service'
import {UserOtherProfiles, UserProfile, UserData, UserDataFetched, UserDataWithDetails} from './user-profile/user-profile.service'
import {Observable} from 'rxjs/Observable'

import {UserInterests} from './user-profile/user-interests'
import {combineLatest} from 'rxjs/operator/combineLatest'

@Injectable()
export class DomainDbService {

  USER_DATA = 'UserData/';

  PATHS = {
    USER_PROFILE: this.USER_DATA + 'UserProfile',
    USER_INTERESTS: this.USER_DATA + 'UserInterests',
    OTHER_PROFILES: this.USER_DATA + 'OtherProfiles',
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

  listUserData(): Observable<UserDataFetched[]> {
    return this.db.list(this.PATHS.USER_INTERESTS);
  }

  listUserDataWithDetails(): Observable<UserDataWithDetails[]> {
    return this.listUserProfile().map(list => {
      return list.map(profile => {
          const id = (profile as any).$key;
          const mapped: UserDataWithDetails = {
            profile: profile,
            otherProfiles: this.otherProfilesById(id),
            interests: this.userInterestsById(id),
          }
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

  userDataById(userId: string): UserData {
    return {
      profile: this.userProfileById(userId),
      otherProfiles: this.otherProfilesById(userId),
      interests: this.userInterestsById(userId),
    }
  }
}
