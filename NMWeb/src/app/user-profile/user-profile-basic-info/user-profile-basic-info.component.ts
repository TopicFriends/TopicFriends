import {Component, Input, OnInit} from '@angular/core';
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

  userProfileObservable: Observable<UserProfile>;

  public displayName = new FormControl()
  public photoUrl: string
  userProfileReceived = false

  @Input() thisFormGroup: FormGroup

  constructor(
    public authService: AuthService,
    private userProfileService: UserProfileService,
  ) {
    // this.formGroup = this.formBuilder.group({
    //   displayName: this.displayName,
    //   // tagLine: '', // oneLineDescription
    // })
  }

  ngOnInit() {
    this.displayName = <FormControl>this.thisFormGroup.get('displayName')

    this.authService.user.subscribe((user) => {
      if ( user ) {
        this.displayName.setValue(user.displayName);
        this.photoUrl = user.photoURL;
      }
    });

    this.authService.user.subscribe(user => {
      this.userProfileObservable = this.userProfileService.getProfile();
      this.userProfileObservable.subscribe((userProfile: UserProfile) => {
        this.applyFromDb(userProfile)
      });
    });

  }

  private applyFromDb(userProfile: UserProfile) {
    this.thisFormGroup.patchValue(userProfile)
    this.thisFormGroup.markAsPristine()
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
