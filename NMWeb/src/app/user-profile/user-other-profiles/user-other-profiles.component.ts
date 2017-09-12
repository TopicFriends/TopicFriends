import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {OtherProfile, UserOtherProfiles, UserProfileService} from '../user-profile.service'
import {AuthService} from 'app/user-profile/auth.service';
import {Observable} from 'rxjs/Observable'


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

  userOtherProfilesObservable: Observable<UserOtherProfiles>;

  @Input() public parentFormGroup: FormGroup;
  public formGroup: FormGroup;

  public otherProfileLinkedIn = new FormControl()
  public otherProfileGitHub = new FormControl()
  public otherProfileStackOverflow = new FormControl()
  public otherProfileTwitter = new FormControl()
  public otherProfileFacebook = new FormControl()

  public otherProfiles: UserOtherProfiles

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
    private authService: AuthService,
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

    this.authService.user.subscribe(user => {
      this.userOtherProfilesObservable = this.userProfileService.getUserOtherProfiles();
      this.userOtherProfilesObservable.subscribe((otherProfiles: UserOtherProfiles) => {
        this.applyFromDb(otherProfiles)

      });
    })
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
