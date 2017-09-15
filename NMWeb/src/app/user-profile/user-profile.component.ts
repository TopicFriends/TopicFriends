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
import {ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router'
import {USER_PROFILE_ID_PARAM_NO_COLON} from './user-profile.module'

export class CanDeactivateUserProfileGuard implements CanDeactivate<UserProfileComponent> {

  canDeactivate(
    component: UserProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    let canDeactivate = component.canDeactivate()
    if ( ! canDeactivate ) {
      window.alert('You have unsaved changes.')
    }
    return canDeactivate
  }
}

export class UserProfileInputs {
  constructor(
    public userId: string,
    public isEditable: boolean,
    public isUserIdFromRouter: boolean,
  ) {
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('basicInfo') basicInfo: UserProfileBasicInfoComponent
  @ViewChild('userDescriptions') userDescriptions: UserDescriptionsComponent
  @ViewChild('userOtherProfiles') userOtherProfilesComponent: UserOtherProfilesComponent
  @ViewChild('userInterests') userInterests: UserInterestsComponent
  @ViewChild('userGeoLocations') userGeoLocations: UserGeoLocationsComponent

  /* Rename to rootFormGroup */
  formGroup: FormGroup

  userProfileBasicInfoFormGroup: FormGroup
  userInterestsFormGroup: FormGroup
  userDescriptionsFormGroup: FormGroup
  userGeoLocationsFormGroup: FormGroup

  userProfileInputs: UserProfileInputs

  constructor(
    public userProfileService: UserProfileService,
    public authService: AuthService,
    public snackBarComponent: SnackBarComponent,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    console.log('UserProfileComponent constructor')
    let userIdFromRouter = this.activatedRoute.snapshot.params[USER_PROFILE_ID_PARAM_NO_COLON];
    if ( userIdFromRouter ) {
      this.userProfileInputs = new UserProfileInputs(userIdFromRouter, false /* Unless we are admin */, true)
    } else {
      this.authService.user.subscribe(loggedUser => {
        let loggedUserId = loggedUser && loggedUser.uid
        if ( loggedUserId ) {
          this.userProfileInputs = new UserProfileInputs(loggedUserId, true, false)
        }
      })
    }

    this.userProfileBasicInfoFormGroup = UserProfileBasicInfoComponent.buildFormGroup(this.formBuilder)
    this.userDescriptionsFormGroup = UserDescriptionsComponent.buildFormGroup(this.formBuilder)
    this.userInterestsFormGroup = UserInterestsComponent.buildFormGroup(this.formBuilder)
    this.userGeoLocationsFormGroup = UserGeoLocationsComponent.buildFormGroup(this.formBuilder)
    this.formGroup = this.formBuilder.group({
      userProfileBasicInfo:
        this.userProfileBasicInfoFormGroup,
      userInterests:
        this.userInterestsFormGroup,
      descriptions:
        this.userDescriptionsFormGroup,
      geoLocations:
        this.userGeoLocationsFormGroup
    })

  }

  ngOnInit() {
    console.log('UserProfileComponent ngOnInit')
  }

  save() {
    if ( ! this.userProfileInputs.isEditable ) {
      window.alert('User Profile not editable. Unable to save!')
      return;
    }
    if ( ! this.hasUnsavedChanges() ) {
      this.snackBarComponent.showSnackBar('There are no unsaved changes')
      return
    }
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
    this.formGroup.markAsPristine()
    this.snackBarComponent.showSnackBar('Profile sent. Thank you!')
  }

  keyDownSave(event) {
    event.preventDefault()
    this.save()
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload($event) {
    if ( ! this.canDeactivate() ) {
      console.log('this.formGroup...', this.formGroup.value)
      $event.returnValue = 'Your data will be lost!';
    }
  }

  public canDeactivate() {
    return ! this.hasUnsavedChanges()
  }

  hasUnsavedChanges() {
    // return false
    return this.formGroup.dirty
  }

}
