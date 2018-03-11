import { Injectable } from '@angular/core';
import {DbObject, DbList, DbService} from './db.service'
import {UserProfile, UserData, UserGeoLocations, UserDescriptions} from './user-profile/user-profile.service'
import {Observable} from 'rxjs/Observable'
import "rxjs/add/observable/of"

import {UserInterests} from './user-profile/user-interests'
import {combineLatest} from 'rxjs/operator/combineLatest'
import {UserSkillLevelsPerUser} from './user-profile/user-skills.service'
import {UserOtherProfiles} from './user-profile/user-other-profiles.service'

@Injectable()
export class DomainDbService {

  USER_DATA = 'UserData/';

  PATHS = {
    USER_PROFILE: this.USER_DATA + 'UserProfile' /* really user basic info */,
    USER_INTERESTS: this.USER_DATA + 'UserInterests',
    OTHER_PROFILES: this.USER_DATA + 'OtherProfiles',
    GEO_LOCATIONS: this.USER_DATA + 'GeoLocations',
    DESCRIPTIONS: this.USER_DATA + 'Descriptions',
    SKILL_LEVELS: this.USER_DATA + 'UserSkillLevels',
  }

  constructor(
    private db: DbService
  ) {

  }

  listUserProfile(): DbList<UserProfile> {
    return this.db.list(this.PATHS.USER_PROFILE)
  }

  listUserInterests(): DbList<UserInterests> {
    return this.db.list(this.PATHS.USER_INTERESTS);
  }


  listUserDataWithDetails(): Observable<UserData[]> {
    return this.listUserProfile().map(list => {
      // console.log('list', list)
      return list.map(profile => {
          const id = (profile as any).$key;
          const mapped: UserData = new UserData(
            id,
            Observable.of(profile),
            this.userInterestsById(id),
            this.userSkillLevelsByUserId(id),
            this.otherProfilesById(id),
            this.userGeoLocationsById(id),
            this.userDescriptionsById(id),
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

  userDescriptionsById(userId: string): DbObject<UserDescriptions> {
    return this.db.objectById(this.PATHS.DESCRIPTIONS, userId);
  }

  userSkillLevelsByUserId(userId: string): DbObject<UserSkillLevelsPerUser> {
    return this.db.objectById(this.PATHS.SKILL_LEVELS, userId)
  }

  userDataById(userId: string): UserData {
    return new UserData(
      userId,
      this.userProfileById(userId),
      this.userInterestsById(userId),
      this.userSkillLevelsByUserId(userId),
      this.otherProfilesById(userId),
      this.userGeoLocationsById(userId),
      this.userDescriptionsById(userId),
    )
  }

}
