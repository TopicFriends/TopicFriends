import { Injectable } from '@angular/core';
import {UserDataCombined, UserProfileService} from './user-profile.service'
import {MatchResults, UserInterests, WantedTopics} from './user-interests'
import {UserListService} from '../user-list/user-list.service'
import {Observable} from 'rxjs/Observable'
import {TagListModel} from '../shared/TagListModel'

export class RelatedTopicLists {

  symmetric: TagListModel
  supplyDemandSame: TagListModel
  supplyDemandMatch: TagListModel

  constructor(
    symmetric: WantedTopics,
    supplyDemandSame: WantedTopics,
    supplyDemandMatch: WantedTopics,
  ) {
    this.symmetric = TagListModel.from(symmetric)
    this.supplyDemandSame = TagListModel.from(supplyDemandSame)
    this.supplyDemandMatch = TagListModel.from(supplyDemandMatch)

    // console.log('RelatedTopicLists, symmetric', symmetric, supplyDemandSame, supplyDemandMatch)
  }
}

export function sortUserByMatchScore (u1: UserMatched, u2: UserMatched) {
  if ( u1.matchResults && u2.matchResults ) {
    return u2.matchResults.matchScore - u1.matchResults.matchScore
  } else {
    return 0
  }
}

export function sortUserByLastModified (u1: UserMatched, u2: UserMatched) {
  if ( u1.userDataCombined.profile && u2.userDataCombined.profile ) {
    return new Date(u2.userDataCombined.profile.lastSaved).getTime() - new Date(u1.userDataCombined.profile.lastSaved).getTime();
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
    let sortFunc = sortUserByMatchScore
    return this.listUsersSortedFiltered(sortFunc)
  }


  public listUsersSortedByLastModified(): Observable<Array<UserMatched>> {
    let sortFunc = sortUserByLastModified
    return this.listUsersSortedFiltered(sortFunc)
  }

  public listUsersSortedFiltered(sortFunc, filterFuncBeforeMatching?: (user: UserDataCombined) => boolean): Observable<Array<UserMatched>> {
    return this.userProfileService.observeLoggedUserProfile().switchMap((loggedUserUdc: UserDataCombined) => {
      return this.userListService.listUserDataCombined().map((usersArray: Array<UserDataCombined>) => {
        if(filterFuncBeforeMatching) {
          usersArray = usersArray.filter(filterFuncBeforeMatching)
        }
        const arrayOfMatchResults = usersArray.map((user: UserDataCombined) => {
          return new UserMatched(user, loggedUserUdc)
        })
        if(sortFunc) {
          arrayOfMatchResults.sort(sortFunc)
        }
        return arrayOfMatchResults
      })
    })
  }

  /** Potential rename: drop the OnceLoggedIn, as it could be implied, that we need to be logged in to calculate MatchResults */
  observeMatchResultsWithAnotherUserByIdOnceLoggedIn(userId: string): Observable<MatchResults> {
    // console.log('observeMatchResultsWithAnotherUserByIdOnceLoggedIn: ', userId)
    return this.userProfileService.getUserInterestsOnceLoggedIn().switchMap(loggedUserInterests => {
      // console.log('getUserInterestsOnceLoggedIn: ', loggedUserInterests)

      const mapFun = (otherUserInterests: UserInterests) => {
        // console.log('getInterestsMatchWith: ', loggedUserInterests, otherUserInterests)
        return UserInterests.getInterestsMatchWith(loggedUserInterests, otherUserInterests)
      }
      return this.userProfileService.userDataById(userId).interests.map(mapFun)
    })
  }

  static sortByMatchScore(userA: UserMatched, userB: UserMatched) {
    if(!userA.matchResults) {
      return 0;
    } else {
      return userB.matchResults.matchScore - userA.matchResults.matchScore;
    }
  }

}
