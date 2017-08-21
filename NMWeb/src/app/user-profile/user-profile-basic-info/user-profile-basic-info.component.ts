import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service'
import {UserProfile, UserProfileService} from '../user-profile.service'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-user-profile-basic-info',
  templateUrl: './user-profile-basic-info.component.html',
  styleUrls: ['./user-profile-basic-info.component.scss']
})
export class UserProfileBasicInfoComponent implements OnInit {

  userProfile: UserProfile;
  userProfileObservable: Observable<UserProfile>;

  public formGroup: FormGroup;

  public displayName = new FormControl()
  public photoUrl: string


  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private userProfileService: UserProfileService,
  ) {
    this.formGroup = this.formBuilder.group({
      displayName: this.displayName,
    })
  }

  ngOnInit() {

    this.authService.user.subscribe((user) => {
      if ( user ) {
        this.displayName.setValue(user.displayName);
        this.photoUrl = user.photoURL;
      }
    });

    this.authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userProfileObservable = this.userProfileService.getProfile();
      this.userProfileObservable.subscribe((userProfile: UserProfile) => {
        this.userProfile = userProfile;
        this.formGroup.patchValue(userProfile)
        // this.whatUserWants = this.;
        console.log('new user profile!', userProfile);
        // FIXME
        if (!(<any>userProfile).whatUserWants) {
          this.userProfile = new UserProfile();
        }
      });
    });

  }

  public getUserBasicInfo() {
    // TODO: first created date
    return {
      displayName: this.displayName.value,
      photoUrl: this.photoUrl
    }
  }


}
