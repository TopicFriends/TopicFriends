import {Injectable} from '@angular/core';
import {UserListService} from '../user-list/user-list.service'
import {TagInclusions} from '../shared/TagInclusions'
import {GeoLocation, GeoLocations, UserData, UserDataCombined, UserGeoLocations} from '../user-profile-shared/user-profile.service'
import { DbListReadOnly} from '../db.service'
import {UserInterests} from '../user-profile-shared/user-interests'
import {UserMatched, UserMatcherService} from '../user-profile-shared/user-matcher.service'

@Injectable()
export class TopicsDetailsService {

  constructor(
    private userListService: UserListService,
    private userMatcherService: UserMatcherService
  ) {
  }

  getUsersWithTopic(topicId: string): DbListReadOnly<UserDataCombined> {
    return this.userListService.listUserDataCombined().map((users: Array<UserDataCombined>) => {
      return users.filter((user: UserDataCombined) => {
        let interests = user.interests;
        return UserInterests.hasTopicId(interests, topicId)
      });
    });
  }

  getMatchedUsersWithTopic(topicId: string): DbListReadOnly<UserMatched> {
    return this.userMatcherService.listUsersSortedFiltered( null, (user) => {
      return UserInterests.hasTopicId(user.interests, topicId)
    });
  }

  static getAllGeoLocationsOfUsersMatched(usersMatched: UserMatched[]): GeoLocation[] {
    let flattenedGeoLocations: GeoLocation[] = [];
    for(let userMatched of usersMatched) {
      let userGeoLocations = userMatched.userDataCombined.geoLocations
      UserGeoLocations.appendUserGeoLocations(userGeoLocations, flattenedGeoLocations)
    }
    return flattenedGeoLocations
  }


  getAllGeoLocationsOfUsersWithTopic(topicId:string): DbListReadOnly<GeoLocation> {
    return this.getMatchedUsersWithTopic(topicId).map((usersMatched: UserMatched[]) => {
      return TopicsDetailsService.getAllGeoLocationsOfUsersMatched(usersMatched);
    });
  }
}
