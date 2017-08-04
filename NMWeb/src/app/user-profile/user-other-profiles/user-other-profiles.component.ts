import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {UserOtherProfiles, UserProfileService} from '../user-profile.service'
import {AuthService} from 'app/user-profile/auth.service';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-user-other-profiles',
  templateUrl: './user-other-profiles.component.html',
  styleUrls: ['./user-other-profiles.component.scss'],
})
export class UserOtherProfilesComponent implements OnInit {

  userOtherProfilesObservable: Observable<UserOtherProfiles>;

  public formGroup: FormGroup;

  public otherProfileLinkedIn = new FormControl()

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
    private authService: AuthService,
  ) {
    this.formGroup = this.formBuilder.group({
      otherProfileLinkedIn: this.otherProfileLinkedIn,
    })
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log('UserOtherProfilesComponent: authService.user.subscribe user', user);
      this.userOtherProfilesObservable = this.userProfileService.getUserOtherProfiles();
      this.userOtherProfilesObservable.subscribe((otherProfiles: UserOtherProfiles) => {
        console.log('userOtherProfilesObservable.subscribe', otherProfiles);

        this.formGroup.patchValue({
          otherProfileLinkedIn: otherProfiles.linkedIn.userName,
        })

      });
    })
  }

}
