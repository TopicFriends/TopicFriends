import { Observable } from 'rxjs/Observable'
import { MatchResults } from './user-interests'
import {
  UserDataCombined,
  UserProfile,
} from './user-profile.service'

export class GeoLocation {
  constructor(public latitude: number,
              public longitude: number,
              public title?: Observable<string>,
              public userId?: string,
              public matchResults?: Observable<MatchResults>,) {
    if (this.title === undefined) {
      this.title = null; // for firebase
    }
    if (this.userId === undefined) {
      this.userId = null; // for firebase
    }
    if (this.matchResults === undefined) {
      this.matchResults = null; // for firebase
    }
  }

  static parseGeoString(geoString: string): GeoLocation {
    if (geoString && geoString.trim().length > 0) {
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
      it.matchResults,
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
            subLocationMulti.userId = userId

            allUsersGeoLocationsFlattened.push(subLocationMulti)
          }
        }
      }

    }
  }

  static getAllGeoLocationsOfUsersDataCombined(usersDataCombined: UserDataCombined[]) {
    let flattenedGeoLocations: GeoLocation[] = [];
    for (let userDataCombined of usersDataCombined) {
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
