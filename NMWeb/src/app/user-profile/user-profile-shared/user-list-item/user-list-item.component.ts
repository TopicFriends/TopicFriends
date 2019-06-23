import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  UserDataCombined,
  UserProfile,
  UserProfileService,
} from 'app/user-profile/user-profile-core/user-profile.service';
import {
  MatchResults,
  SupplyDemandInteractions,
  SymmetricInteractions,
  UserInterests,
} from '../../user-profile-core/user-interests'
import { AuthService } from '../auth.service'
import { UserDescriptions } from '../../user-profile-core/user-descriptions.service'
import { Subject } from 'rxjs/Subject'

import 'rxjs/add/operator/takeUntil';
import { changeDetectionForUserProfileListSpeedup } from '../../../topics/topics-shared/topic-tag/topic-tag.component'
import { UserMatched } from '../../user-profile-core/user-matcher.service'


@Component({
  selector: 'nw-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: changeDetectionForUserProfileListSpeedup,
})
export class UserListItemComponent implements OnInit, OnDestroy {

  // @Input('userProfile') _userPublicProfile: UserData
  @Input() userMatched: UserMatched
  @Input() userDataCombined: UserDataCombined
  @Input() showLess: boolean;

  show = {
    anything: true,
    image: true,
    topics: false,
    otherProfileBadges: true,
  }
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
