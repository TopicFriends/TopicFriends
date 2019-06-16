import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {
  UserData,
  UserDataCombined,
  UserProfile,
  UserProfileService,
} from 'app/user-profile-shared/user-profile.service';
import {
  MatchResults, SupplyDemandInteractions, SymmetricInteractions, TopicInterest,
  UserInterests,
} from '../../user-profile-shared/user-interests'
import {getDictionaryValuesAsArray} from 'app/shared/utils';
import {TagListModel} from '../../shared/TagListModel'
import {TagInclusions} from '../../shared/TagInclusions'
import { AuthService } from '../../user-profile-shared/auth.service'
import { UserDescriptions } from '../../user-profile-shared/user-descriptions.service'
import {Subject} from 'rxjs/Subject'

import "rxjs/add/operator/takeUntil";
import { UserMatched } from '../../user-profile-shared/user-matcher.service'


@Component({
  selector: 'nw-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit, OnDestroy {

  // @Input('userProfile') _userPublicProfile: UserData
  @Input() userMatched: UserMatched
  @Input() userDataCombined: UserDataCombined
  @Input() showLess: boolean;
  userId
  // @Input('userProfile') _userPublicProfile: UserProfile = new UserProfile();

  loggedUserInterests: UserInterests;
  loggedUserInterestsSymmetric: SymmetricInteractions;
  loggedUserInterestsSupplyDemand: SupplyDemandInteractions;
  loggedUserId: string;


  userInterests: UserInterests;
  userDescriptions: UserDescriptions;
  profileBasicInfo: UserProfile;
  _expand: boolean;
  supplyDemand
  matchResults: MatchResults

  private unsubscribe = new Subject<void>();

  constructor(
    private userProfileService: UserProfileService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    if ( this.userMatched ) {
      this.userDataCombined = this.userMatched.userDataCombined
    }
    this.authService.user.takeUntil(this.unsubscribe).subscribe((user) => {
      this.loggedUserId = user && user.uid;
    })
    this.userId = this.userDataCombined.userId
    this.userProfileService.getUserInterestsOnceLoggedIn().takeUntil(this.unsubscribe).subscribe(interests => {
      this.loggedUserInterests = UserInterests.fromJson(interests)
      this.loggedUserInterestsSymmetric =
        this.loggedUserInterests &&
        this.loggedUserInterests.byInteractionMode &&
        this.loggedUserInterests.byInteractionMode.symmetric
      // console.log('loggedUserInterestsSymmetric', this.loggedUserInterestsSymmetric)
      this.loggedUserInterestsSupplyDemand =
        this.loggedUserInterests &&
        this.loggedUserInterests.byInteractionMode &&
        this.loggedUserInterests.byInteractionMode.supplyDemand
    })
    this.userDescriptions = this.userDataCombined.descriptions
    this.userInterests = this.userDataCombined.interests
    this.supplyDemand =
      this.userInterests &&
      this.userInterests.byInteractionMode &&
      this.userInterests.byInteractionMode.supplyDemand

    this.matchResults = this.userMatched.matchResults
    this.profileBasicInfo = this.userDataCombined.profile
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  isLoggedUser() {
    return this.loggedUserId === this.userId;
  }

  shortDescription(description: String, maxLength = 140) {

    if(description && description.length > 140) {
      description = description.slice(0, maxLength) + '...';
    }
    return description;
  }

}
