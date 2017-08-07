import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {OtherProfile, UserOtherProfiles, UserProfileService} from '../user-profile.service'
import {AuthService} from 'app/user-profile/auth.service';
import {Observable} from 'rxjs/Observable'


function getOtherProfileName(otherProfile: OtherProfile) {
  return otherProfile && otherProfile.userName
}

function otherProfileUserName(formControl: FormControl) {
  return formControl.value || "" // || "" to prevent firebase complaining about undefined
}

@Component({
  selector: 'app-user-other-profiles',
  templateUrl: './user-other-profiles.component.html',
  styleUrls: ['./user-other-profiles.component.scss'],
})
export class UserOtherProfilesComponent implements OnInit {

  userOtherProfilesObservable: Observable<UserOtherProfiles>;

  public formGroup: FormGroup;

  public otherProfileLinkedIn = new FormControl()
  public otherProfileGitHub = new FormControl()

  private otherProfiles: UserOtherProfiles

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
    private authService: AuthService,
  ) {
    this.formGroup = this.formBuilder.group({
      otherProfileLinkedIn: this.otherProfileLinkedIn,
      otherProfileGitHub: this.otherProfileGitHub,
    })
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log('UserOtherProfilesComponent: authService.user.subscribe user', user);
      this.userOtherProfilesObservable = this.userProfileService.getUserOtherProfiles();
      this.userOtherProfilesObservable.subscribe((otherProfiles: UserOtherProfiles) => {
        console.log('userOtherProfilesObservable.subscribe', otherProfiles);
        this.otherProfiles = otherProfiles;
        if ( otherProfiles ) {
          this.formGroup.patchValue({
            otherProfileLinkedIn:
              getOtherProfileName(otherProfiles.linkedIn),
            otherProfileGitHub:
              getOtherProfileName(otherProfiles.gitHub),
          })
        }

      });
    })
  }

  getOtherProfiles(): UserOtherProfiles {
    return {
      linkedIn: {
        userName: otherProfileUserName(this.otherProfileLinkedIn),
      },
      gitHub: {
        userName: otherProfileUserName(this.otherProfileGitHub),
      },
    };
  }
}
