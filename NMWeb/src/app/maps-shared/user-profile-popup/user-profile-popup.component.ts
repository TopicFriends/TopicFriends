import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService, UserProfile } from 'app/user-profile-shared/user-profile.service';

@Component({
  selector: 'app-user-profile-popup',
  templateUrl: './user-profile-popup.component.html',
  styleUrls: ['./user-profile-popup.component.scss']
})
export class UserProfilePopupComponent implements OnInit {

  @Input() userId: any;
  userProfile: UserProfile;

  constructor(
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
  }

  loadUserProfile() {
    this.userProfileService.userProfileById(this.userId).subscribe(
      (userProfile: UserProfile) => {
        this.userProfile = userProfile;
      }
    );
  }

}
