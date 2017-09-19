import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service'
import {UserProfile, UserProfileService} from '../user-profile.service'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {DomainDbService} from '../../domain-db.service'
import {UserProfileInputs} from '../user-profile.component'
import {isNullOrUndefinedOrWhiteSpace, setFormControlEnabled} from '../../shared/utils'

@Component({
  selector: 'app-user-profile-basic-info',
  templateUrl: './user-profile-basic-info.component.html',
  styleUrls: ['./user-profile-basic-info.component.scss']
})
export class UserProfileBasicInfoComponent implements OnInit {

  public displayName = new FormControl()
  public photoUrl: string
  userProfileReceived = false

  @Input() thisFormGroup: FormGroup
  @Input() userProfileInputs: UserProfileInputs

  constructor(
    public authService: AuthService,
    private userProfileService: UserProfileService,
    private domainDbService: DomainDbService,
  ) {
    // this.formGroup = this.formBuilder.group({
    //   displayName: this.displayName,
    //   // tagLine: '', // oneLineDescription
    // })
  }

  ngOnInit() {
    this.displayName = <FormControl>this.thisFormGroup.get('displayName')
    setFormControlEnabled(this.displayName, this.userProfileInputs.isEditable)

    if ( ! this.userProfileInputs.isUserIdFromRouter ) {
      this.authService.user.subscribe((user) => {
        if ( user ) {
          if ( ! this.wasNameSetByUser() ) {
            this.displayName.setValue(user.displayName);
            this.thisFormGroup.markAsDirty(); // should encourage new users to save to create profile
          }
          this.photoUrl = user.photoURL;
          // FIXME: only do this if userId not from router
        }
      });
    }

    this.domainDbService.userProfileById(this.userProfileInputs.userId).subscribe((userProfile: UserProfile) => {
      console.log('userProfileById: ', userProfile)
      this.applyFromDb(userProfile)
    });

  }

  private wasNameSetByUser() {
    // return false; // FIXME
    return ! isNullOrUndefinedOrWhiteSpace( this.displayName.value );
  }

  private applyFromDb(userProfile: UserProfile) {
    if ( userProfile ) {
      if (userProfile.photoUrl && !this.photoUrl ) {
        this.photoUrl = userProfile.photoUrl
      }
      this.thisFormGroup.patchValue(userProfile)
      if ( ! userProfile.displayName ) {
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
      photoUrl: this.photoUrl
    }
  }

  copyUserId() {

  }

  static buildFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      displayName: ''
    })
  }

}
