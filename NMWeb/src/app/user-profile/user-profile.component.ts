import { Component, OnInit } from '@angular/core';
import {UserProfile, UserProfileService, WhatUserWants} from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile;
  userProfileObservable = this.userProfileService.getProfile();

  constructor(
    protected userProfileService: UserProfileService,
  ) {
    this.userProfileObservable.subscribe(p => {
      this.userProfile = p;
      // this.whatUserWants = this.userProfile.whatUserWants;
      console.log('new user profile!', p);
      if ( ! (<any>p).whatUserWants ) {
        this.userProfile = new UserProfile();
      }
    });
  }

  ngOnInit() {
  }

  save() {
    this.userProfileService.saveUserProfile(this.userProfile);
  }

}
