import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../user-profile-shared/auth.service';
import {Observable} from 'rxjs/Observable';
import {UserProfile, UserProfileService} from '../user-profile-core/user-profile.service'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {UserProfileBasicInfoComponent} from './user-profile-basic-info/user-profile-basic-info.component'
import {UserInterestsComponent} from './user-interests/user-interests.component'
import {SnackBarComponent} from '../../shared/snackbar/snackbar.component'
import {UserGeoLocationsComponent} from './user-geo-locations/user-geo-locations.component'
import {UserDescriptionsComponent} from './user-descriptions/user-descriptions.component'
import {ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router'
import {UserSkillsSectionComponent} from './user-skills-section/user-skills-section.component'
import {UserProfileInputs} from './UserProfileInputs'
import {UserConfigService} from "../../shared/user-config.service"
import { USER_PROFILE_ID_PARAM_NO_COLON } from '../../shared/routes'
import { Title } from '@angular/platform-browser'
import {userAliases} from '../../../assets/user-aliases'
import { AuthDialogService } from '../../core/auth-dialog.service'


@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss']
})
export class UserProfileDetailsComponent implements OnInit {

  @ViewChild('basicInfo') basicInfo: UserProfileBasicInfoComponent
  @ViewChild('userDescriptions') userDescriptions: UserDescriptionsComponent
  @ViewChild('userOtherProfiles') userOtherProfilesComponent: UserOtherProfilesComponent
  @ViewChild('userInterests') userInterests: UserInterestsComponent
  @ViewChild('userSkills') userSkills: UserSkillsSectionComponent
  @ViewChild('userGeoLocations') userGeoLocations: UserGeoLocationsComponent

  /* Rename to rootFormGroup */
  formGroup: FormGroup
  isFirstTime: boolean;
  userProfileBasicInfoFormGroup: FormGroup
  userInterestsFormGroup: FormGroup
  userSkillsFormGroup: FormGroup
  userDescriptionsFormGroup: FormGroup
  userGeoLocationsFormGroup: FormGroup

  userProfileInputs: UserProfileInputs
  checkPrivacityValue: boolean

  showUserSkillsSection = false

  constructor(
    public userProfileService: UserProfileService,
    public authService: AuthService,
    public snackBarComponent: SnackBarComponent,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userConfigService: UserConfigService,
    private titleService: Title,
    public authDialogService: AuthDialogService,
  ) {
    console.log('UserProfileComponent constructor')

    const userConfig = JSON.parse(localStorage.getItem('userConfig'));
    this.showUserSkillsSection = userConfig && userConfig['show-skills']

    let userIdFromRouter = this.activatedRoute.snapshot.params[USER_PROFILE_ID_PARAM_NO_COLON];
    let userId = userAliases[userIdFromRouter] || userIdFromRouter;
    console.log(userId);
    if ( userId ) {
      this.userProfileInputs = new UserProfileInputs(userId, false /* Unless we are admin */, true)
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
    this.userSkillsFormGroup = UserSkillsSectionComponent.buildFormGroup(this.formBuilder)
    this.userGeoLocationsFormGroup = UserGeoLocationsComponent.buildFormGroup(this.formBuilder)
    this.formGroup = this.formBuilder.group({
      userProfileBasicInfo:
        this.userProfileBasicInfoFormGroup,
      userInterests:
        this.userInterestsFormGroup,
      userSkills:
        this.userSkillsFormGroup,
      descriptions:
        this.userDescriptionsFormGroup,
      geoLocations:
        this.userGeoLocationsFormGroup
    })

  }

  ngOnInit() {
    console.log('UserProfileComponent ngOnInit')
    let privacityValue = this.userConfigService.getPrivacityValue();
    this.checkPrivacityValue = (privacityValue == 'Accepted');
    this.isFirstTime = (!privacityValue);
  }

  save() {
    if (!this.userProfileInputs.isEditable) {
      window.alert('User Profile not editable. Unable to save!')
      return;
    }
    if (!this.checkPrivacityValue) {
      this.snackBarComponent.showSnackBar('Por favor, marca la casilla, indicando que aceptas nuestra política de privacidad.')
      this.scrollToSave()
      return;
    }
    if ( ! this.hasUnsavedChanges() ) {
      this.snackBarComponent.showSnackBar('No hay cambios nuevos en tu perfil')
      return
    }
    // FIXME this.userProfile.displayName = this.displayName.value;

    const otherProfiles = this.userOtherProfilesComponent.getOtherProfiles()
    const userInterests = this.userInterests.getUserInterests()
    const userSkills = this.userSkills.getValue()
    const userProfile: UserProfile = this.basicInfo.getUserBasicInfo()
    const userGeoLocations = this.userGeoLocations.getValue()
    const userDescriptions = this.userDescriptions.getValue()
    console.log('userGeoLocations', userGeoLocations)
    console.log('save()', userInterests);
    (this.isFirstTime) ? this.userConfigService.setPrivacityValue('Accepted') : false;
    // this.userProfileObservable =
    this.userProfileService.saveUserProfile(
      userProfile,
      userInterests,
      userSkills,
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
    // console.log('hasUnsavedChanges, userProfileInputs:', this.userProfileInputs)
    // return false
    return this.userProfileInputs && this.userProfileInputs.isEditable && this.formGroup.dirty
  }

  scrollToSave() {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  shouldShowUserProfile() {
    return !(!this.userProfileInputs || !this.authService.userSaved && this.userProfileInputs.isEditable);
  }

  isOwnProfile() {
    return !this.activatedRoute.snapshot.params[USER_PROFILE_ID_PARAM_NO_COLON];
  }
}
