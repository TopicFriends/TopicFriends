import { Injectable } from '@angular/core';
import {UserDataCombined, UserProfileService} from './user-profile/user-profile.service'
import {MatchResults, UserInterests} from './user-profile/user-interests'
import {UserListService} from './user-list/user-list.service'
import {Observable} from 'rxjs/Observable'


export function sortUserByMatchScore (u1: UserMatched, u2: UserMatched) {
  if ( u1.matchResults && u2.matchResults ) {
    return u2.matchResults.matchScore - u1.matchResults.matchScore
  } else {
    return 0
  }
}

export function sortUserByLastModified (u1: UserMatched, u2: UserMatched) {
  if ( u1.userDataCombined.profile && u2.userDataCombined.profile ) {
    return (''+u1.userDataCombined.profile.lastSaved)
      .localeCompare(''+u2.userDataCombined.profile.lastSaved)
  } else {
    return 0
  }
}

export class UserMatched {
  public userId
  public matchResults: MatchResults

  constructor(
    public userDataCombined: UserDataCombined,
    public loggedInUser: UserDataCombined,
  ) {
    this.userId = userDataCombined.userId
    if ( this.loggedInUser && this.loggedInUser.interests && this.userDataCombined.interests ) {
      this.matchResults = UserInterests.getInterestsMatchWith(
        this.loggedInUser.interests,
        this.userDataCombined.interests,
      )
    }
  }
}

/** Idea: have bigger increments of score, like 5, 10. Looks cooler and we can have smaller bits of points like on SO */
@Injectable()
export class UserMatcherService {

  constructor(
    private userProfileService: UserProfileService,
    private userListService: UserListService,
  ) {

  }

  public listUsersSortedByMatchScoreAndFilteredByMaxDistance(maxDistance?: number): Observable<Array<UserMatched>> {
    let sortFunc = (u1: UserMatched, u2: UserMatched) => {
      if ( u1.matchResults && u2.matchResults ) {
        return u2.matchResults.matchScore - u1.matchResults.matchScore
      } else {
        return 0
      }
    }
    return this.listUsersSortedFiltered(sortFunc)
  }

  public listUsersSortedByLastModified(): Observable<Array<UserMatched>> {
    return this.listUsersSortedFiltered(sortUserByLastModified)
  }

  public listUsersSortedFiltered(sortFunc, filterFunc?): Observable<Array<UserMatched>> {
    return this.userProfileService.observeLoggedUserProfile().switchMap((loggedUserUdc: UserDataCombined) => {
      return this.userListService.listUserDataCombined().map((usersArray: Array<UserDataCombined>) => {
        const arrayOfMatchResults = usersArray.map((user: UserDataCombined) => {
          return new UserMatched(user, loggedUserUdc)
        })
        arrayOfMatchResults.sort(sortFunc)
        return arrayOfMatchResults
      })
    })
  }

}
