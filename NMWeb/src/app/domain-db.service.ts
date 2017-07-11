import { Injectable } from '@angular/core';
import {DbObject, DbList, DbService} from './db.service'
import {OtherProfiles, UserProfile, UserInterests, UserData} from './user-profile/user-profile.service'
import {Observable} from 'rxjs/Observable'

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

  listOtherProfiles(): DbList<OtherProfiles> {
    return this.db.list(this.PATHS.OTHER_PROFILES);
  }

  listUserInterests(): DbList<UserInterests> {
    return this.db.list(this.PATHS.USER_INTERESTS);
  }

  userProfileById(id: string): DbObject<UserProfile> {
    return this.db.objectById(this.PATHS.USER_PROFILE, id);
  }

  otherProfilesById(id: string): DbObject<OtherProfiles> {
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
