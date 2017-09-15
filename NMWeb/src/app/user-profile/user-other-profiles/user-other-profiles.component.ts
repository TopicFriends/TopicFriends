import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {OtherProfile, UserOtherProfiles, UserProfileService} from '../user-profile.service'
import {AuthService} from 'app/user-profile/auth.service';
import {Observable} from 'rxjs/Observable'
import {DomainDbService} from '../../domain-db.service'
import {UserProfileInputs} from '../user-profile.component'
import {setFormControlEnabled} from '../../shared/utils'


function getOtherProfileName(otherProfile: OtherProfile) {
  return otherProfile && otherProfile.userName
}

function otherProfileUserName(formControl: FormControl) {
  // return formControl.value || "" // || "" to prevent firebase complaining about undefined
  return formControl.value || null // || "" to prevent firebase complaining about undefined
}

@Component({
  selector: 'app-user-other-profiles',
  templateUrl: './user-other-profiles.component.html',
  styleUrls: ['./user-other-profiles.component.scss'],
})
export class UserOtherProfilesComponent implements OnInit {

  @Input() public parentFormGroup: FormGroup;
  @Input() public userProfileInputs: UserProfileInputs
  public formGroup: FormGroup;

  public otherProfileLinkedIn = new FormControl()
  public otherProfileGitHub = new FormControl()
  public otherProfileStackOverflow = new FormControl()
  public otherProfileTwitter = new FormControl()
  public otherProfileFacebook = new FormControl()

  public otherProfiles: UserOtherProfiles

  constructor(
    private formBuilder: FormBuilder,
    private domainDbService: DomainDbService,
  ) {
    this.formGroup = this.formBuilder.group({
      otherProfileLinkedIn: this.otherProfileLinkedIn,
      otherProfileGitHub: this.otherProfileGitHub,
      otherProfileStackOverflow: this.otherProfileStackOverflow,
      otherProfileTwitter: this.otherProfileTwitter,
      otherProfileFacebook: this.otherProfileFacebook,
    })
  }

  ngOnInit() {
    this.parentFormGroup.addControl('UserOtherProfiles', this.formGroup)
    // new approach: adding to parent form group instead of constructing the whole form structure at once
    this.domainDbService.otherProfilesById(this.userProfileInputs.userId).subscribe((otherProfiles: UserOtherProfiles) => {
      this.applyFromDb(otherProfiles)
    });
    setFormControlEnabled(this.formGroup, this.userProfileInputs.isEditable)
  }

  private applyFromDb(otherProfiles: UserOtherProfiles) {
    this.otherProfiles = otherProfiles;
    if (otherProfiles) {
      // FIXME: setValue instead of patchValue (because some might be undefined)
      // this.formGroup.setValue({
      this.formGroup.patchValue({
        otherProfileLinkedIn: getOtherProfileName(otherProfiles.linkedIn),
        otherProfileGitHub: getOtherProfileName(otherProfiles.gitHub),
        otherProfileStackOverflow: getOtherProfileName(otherProfiles.stackOverflow),
        otherProfileTwitter: getOtherProfileName(otherProfiles.twitter),
        otherProfileFacebook: getOtherProfileName(otherProfiles.facebook),
      })
    }
    this.formGroup.markAsPristine()
  }

  getOtherProfiles(): UserOtherProfiles {
    return {
      linkedIn: {
        userName: otherProfileUserName(this.otherProfileLinkedIn),
      },
      gitHub: {
        userName: otherProfileUserName(this.otherProfileGitHub),
      },
      stackOverflow: {
        userName: otherProfileUserName(this.otherProfileStackOverflow),
      },
      twitter: {
        userName: otherProfileUserName(this.otherProfileTwitter),
      },
      facebook: {
        userName: otherProfileUserName(this.otherProfileFacebook),
      },
    };
  }
}
