import { Injectable } from '@angular/core';
import {
  UserData,
  UserDataCombined,
  UserProfile,
  UserProfileService,
} from 'app/user-profile/user-profile-core/user-profile.service';
import { Observable } from 'rxjs/Observable'
import { UserInterests } from './user-interests'
import { combineLatest } from 'rxjs/observable/combineLatest'
import {
  UserOtherProfiles,
  UserOtherProfilesService,
} from './user-other-profiles.service'
import { UserGeoLocationsService } from './user-geo-locations.service'
import {
  UserDescriptions,
  UserDescriptionsService,
} from './user-descriptions.service'
import { UserGeoLocations } from './user-geo-locations.types'
import {
  UserSkillLevelsPerUser,
  UserSkillsService,
} from './user-skills.service'


function iterateAndPut<TItem>(
  map: Map<string, UserDataCombined>,
  items: TItem[],
  callbackPerItem: (ud: UserDataCombined, item: TItem) => void
) {
  for ( const item of (items as any[]) ) {
    const key = item.$key
    let mapEntry = map.get(key)
    if ( ! mapEntry ) {
      mapEntry = new UserDataCombined()
      mapEntry.userId = key
      map.set(key, mapEntry)
    }
    callbackPerItem(mapEntry, item)
  }
}

function combineUserDataByKeys(
  up: UserProfile[],
  uin: UserInterests[],
  udes: UserDescriptions[],
  ugeo: UserGeoLocations[],
  uoth: UserOtherProfiles[],
  usk: UserSkillLevelsPerUser[],
): UserDataCombined[]
{
  // stitch by keys
  const map = new Map<string, UserDataCombined>()
  iterateAndPut(map, up, (ud, item) => {
    ud.profile = item
  })
  iterateAndPut(map, uin, (ud, item) => {
    ud.interests = item
  })
  iterateAndPut(map, udes, (ud, item) => {
    ud.descriptions = item
  })
  iterateAndPut(map, ugeo, (ud, item) => {
    ud.geoLocations = item
  })
  iterateAndPut(map, uoth, (ud, item) => {
    ud.otherProfiles = item
  })
  iterateAndPut(map, usk, (ud, item) => {
    ud.skills = item
  })
  console.log('got listUserDataCombined2', map)
  // return [... mapByKey.values()]
  const retArray = Array.from(map.values())

  for ( const retItem of retArray ) {
    retItem.userData = new UserData(
      retItem.userId,
      // hack to de-combine to observables:
      Observable.of(retItem.profile),
      Observable.of(retItem.interests),
      Observable.of(retItem.skills),
      Observable.of(retItem.otherProfiles),
      Observable.of(retItem.geoLocations),
      Observable.of(retItem.descriptions),
    )
  }
  return retArray
}

@Injectable()
export class UserListCombinedService {

  constructor(
    private userProfileService: UserProfileService,
    private userOtherProfilesService: UserOtherProfilesService,
    private userGeoLocationsService: UserGeoLocationsService,
    private userDescriptionsService: UserDescriptionsService,
    private userSkillsService: UserSkillsService,
  ) {
  }

  public listUserDataCombined() {
    return combineLatest(
      this.userProfileService.listUserProfile(),
      this.userProfileService.listUserInterests(),
      this.userDescriptionsService.listUserDescriptions(),
      this.userGeoLocationsService.getAllUserGeoLocations(),
      this.userOtherProfilesService.listOtherProfiles(),
      this.userSkillsService.listAll(),
      combineUserDataByKeys
      // ).subscribe(() => {})
    )
  }

}
