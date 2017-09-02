import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {UserOtherProfiles, UserProfile, UserProfileService} from './user-profile.service'
import {SymmetricInteractions, TopicInterest, UserInterests} from './user-interests'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {UserProfileBasicInfoComponent} from './user-profile-basic-info/user-profile-basic-info.component'
import {UserInterestsComponent} from './user-interests/user-interests.component'
import {SnackBarComponent} from '../shared/snackbar/snackbar.component'
import {UserGeoLocationsComponent} from './user-geo-locations/user-geo-locations.component'
import {UserDescriptionsComponent} from './user-descriptions/user-descriptions.component'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('userOtherProfiles') userOtherProfilesComponent: UserOtherProfilesComponent
  @ViewChild('basicInfo') basicInfo: UserProfileBasicInfoComponent
  @ViewChild('userInterests') userInterests: UserInterestsComponent
  @ViewChild('userGeoLocations') userGeoLocations: UserGeoLocationsComponent
  @ViewChild('userDescriptions') userDescriptions: UserDescriptionsComponent


  constructor(
    protected userProfileService: UserProfileService,
    public authService: AuthService,
    public snackBarComponent: SnackBarComponent,) {
  }

  ngOnInit() {
  }

  save() {
    // FIXME this.userProfile.displayName = this.displayName.value;

    const otherProfiles = this.userOtherProfilesComponent.getOtherProfiles()
    const userInterests = this.userInterests.getUserInterests()
    const userProfile: UserProfile = this.basicInfo.getUserBasicInfo()
    const userGeoLocations = this.userGeoLocations.getValue()
    const userDescriptions = this.userDescriptions.getValue()
    console.log('userGeoLocations', userGeoLocations)
    console.log('save()', userInterests)
    // this.userProfileObservable =
    this.userProfileService.saveUserProfile(
      userProfile,
      userInterests,
      otherProfiles,
      userGeoLocations,
      userDescriptions,
    );
    this.snackBarComponent.showSnackBar('Profile sent. Thank you!')
  }

  keyDownSave(event) {
    event.preventDefault()
    this.save()
  }

}
