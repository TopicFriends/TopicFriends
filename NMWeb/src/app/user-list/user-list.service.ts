import { Injectable } from '@angular/core';
import {
  UserData,
  UserDataCombined,
  UserProfileService,
} from 'app/user-profile-shared/user-profile.service';
import {UserProfile} from 'app/user-profile-shared/user-profile.service';
import {
  DbList,
  DbListReadOnly,
} from '../shared/db.service';
import {Observable} from 'rxjs/Observable'
import {arrayOfObservablesToObservableOfArray} from '../shared/utils'
import { UserInterests } from '../user-profile-shared/user-interests'
import { combineLatest } from 'rxjs/observable/combineLatest'
import {
  UserOtherProfiles,
  UserOtherProfilesService,
} from '../user-profile-shared/user-other-profiles.service'
import { UserGeoLocationsService } from '../user-profile-shared/user-geo-locations.service'
import {
  UserDescriptions,
  UserDescriptionsService,
} from '../user-profile-shared/user-descriptions.service'
import { UserGeoLocations } from '../user-profile-shared/user-geo-locations.types'
import {
  UserSkillLevelsPerUser,
  UserSkillsService,
} from '../user-profile-shared/user-skills.service'


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
//
// function putIfAbsent(map: Map<string, UserDataCombined>, (ud: UserDataCombined)=>void) {
//   map.get()
// }


@Injectable()
export class UserListService {

  userList = [];

  constructor(
    private userProfileService: UserProfileService,
    private userOtherProfilesService: UserOtherProfilesService,
    private userGeoLocationsService: UserGeoLocationsService,
    private userDescriptionsService: UserDescriptionsService,
    private userSkillsService: UserSkillsService,
  ) {
    //this.userList = db.list('UserProfile');
  }

  // public getFilteredUsersList(minimumMatchScore: number): Observable<UserDataFetched[]> {
  //
  // }

  public listUserData(): DbListReadOnly<UserData> {
    let listUserDataWithDetails: DbListReadOnly<UserData> = this.userProfileService.listUserDataWithDetails();
    return listUserDataWithDetails;
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

  public listUserDataCombinedOLD(): Observable<Array<UserDataCombined>> {
    // this.listUserDataCombined2()
    let listUserDataWithDetails: DbListReadOnly<UserData> = this.userProfileService.listUserDataWithDetails();

    let obsOfArrayOfObsUDC = listUserDataWithDetails.map((arrayOfUserData: Array<UserData>) => {
      return arrayOfUserData.map(ud => {
        return ud.combineLatest()
      })
    })

    const switchMap: Observable<Array<UserDataCombined>> = obsOfArrayOfObsUDC.switchMap((arr: Array<Observable<UserDataCombined>>) => {
      let observableOfArray: Observable<Array<UserDataCombined>> = arrayOfObservablesToObservableOfArray<UserDataCombined>(arr)
      return observableOfArray
    })
    return switchMap


    // let elementsAsCombined: Observable<Array<UserDataCombined>> = listUserDataWithDetails.map((els: UserData[]) => {
    //   let x: UserDataCombined[] = els.map((el: UserData) => {
    //     return el.combineLatest()
    //   })
    //   return combineLatest(x)
    // })
    // return elementsAsCombined
  }



}
