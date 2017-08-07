///<reference path="./user-profile.service.ts"/>
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {UserOtherProfiles, UserProfile, UserProfileService} from './user-profile.service'
import {SymmetricInteractions, TopicInterest, UserInterests} from './user-interests'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {UserProfileBasicInfoComponent} from './user-profile-basic-info/user-profile-basic-info.component'
import {UserInterestsComponent} from './user-interests/user-interests.component'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('userOtherProfiles') userOtherProfilesComponent: UserOtherProfilesComponent
  @ViewChild('basicInfo') basicInfo: UserProfileBasicInfoComponent
  @ViewChild('userInterests') userInterests: UserInterestsComponent


  constructor(
    protected userProfileService: UserProfileService,
    public authService: AuthService,
  ) {
  }

  ngOnInit() {
  }

  save() {
    // FIXME this.userProfile.displayName = this.displayName.value;
    const otherProfiles = this. userOtherProfilesComponent.getOtherProfiles()
    // this..profileFacebook = this.displayName.value;
    const whatUserWants2 = UserInterests.fromJson({
      byInteractionMode: {
        symmetric: this.userInterests.symmetricInteractions,
      }
    })
    const userProfile: UserProfile = {
      displayName: this.basicInfo.displayName.value
    } // TODO: first created date
    console.log('save()', whatUserWants2)
    // this.userProfileObservable =
    this.userProfileService.saveUserProfile(
      userProfile,
      whatUserWants2,
      otherProfiles,
    );
  }

}
