import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {DomainDbService} from '../../domain-db.service'
import {UserProfileInputs} from '../UserProfileInputs'
import {isNullOrUndefinedOrWhiteSpace, setFormControlEnabled} from '../../shared/utils'
import {Title} from "@angular/platform-browser";
import { AuthService } from '../../user-profile-shared/auth.service'
import {
  UserProfile,
  UserProfileService,
} from '../../user-profile-shared/user-profile.service'

@Component({
  selector: 'app-user-profile-basic-info',
  templateUrl: './user-profile-basic-info.component.html',
  styleUrls: ['./user-profile-basic-info.component.scss']
})
export class UserProfileBasicInfoComponent implements OnInit {

  public displayName = new FormControl()
  public gender = new FormControl()
  public photoUrl: string
  userProfileReceived = false

  @Input() thisFormGroup: FormGroup
  @Input() userProfileInputs: UserProfileInputs

  constructor(
    public authService: AuthService,
    private userProfileService: UserProfileService,
    private domainDbService: DomainDbService,
    private titleService: Title,

  ) {
    // this.formGroup = this.formBuilder.group({
    //   displayName: this.displayName,
    //   // tagLine: '', // oneLineDescription
    // })

  }

  ngOnInit() {
    this.displayName = <FormControl>this.thisFormGroup.get('displayName')
    this.gender = <FormControl>this.thisFormGroup.get('gender')
    setFormControlEnabled(this.displayName, this.userProfileInputs.isEditable)
    setFormControlEnabled(this.gender, this.userProfileInputs.isEditable)

    if ( ! this.userProfileInputs.isUserIdFromRouter ) {
      this.authService.user.subscribe((user) => {
        if ( user ) {
          if ( ! this.isDisplayNameFormControlFilled() /* this check prevents overwriting of user-entered name by the default */ ) {
            this.displayName.setValue(user.displayName);
            // we cannot decide if unsaved, because firebase data might have not yet arrived:
            // this.thisFormGroup.markAsDirty(); // should encourage new users to save to create profile
          }
          this.photoUrl = user.photoURL;
          // FIXME: only do this if userId not from router
        }
      });
    }

    this.domainDbService.userProfileById(this.userProfileInputs.userId).subscribe((userProfile: UserProfile) => {
      console.log('userProfileById: ', userProfile)
      this.applyFromDb(userProfile)
      this.titleService.setTitle(`${userProfile.displayName} - Profile`);
    });

  }

  private isDisplayNameFormControlFilled() {
    // return false; // FIXME
    return ! isNullOrUndefinedOrWhiteSpace( this.displayName.value );
  }

  private applyFromDb(userProfile: UserProfile) {
    if ( userProfile ) {

      if ( userProfile.photoUrl && !this.photoUrl ) {
        this.photoUrl = userProfile.photoUrl
      }
      this.thisFormGroup.patchValue(userProfile)
      if ( ! userProfile.displayName ) { // consider: if ( ! userProfile.exists() ) {
        this.thisFormGroup.markAsDirty() // User has not yet provided name; we can prompt that about unsaved to prevent leaving
      } else {
        this.thisFormGroup.markAsPristine()
      }
    } else {
      this.thisFormGroup.markAsDirty() // User has not yet provided anything, we can prompt unsaved to prevent leaving
    }
    this.userProfileReceived = true
  }

  public getUserBasicInfo() {
    // TODO: first created date
    return {
      displayName: this.displayName.value,
      photoUrl: this.photoUrl,
      gender: this.gender.value,
    }
  }

  copyUserId() {

  }

  static buildFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      displayName: '',
      gender: null,
    })
  }

}
