import { Component, OnInit } from '@angular/core';
import {UserProfile, UserProfileService, WhatUserWants} from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile = new UserProfile();
  whatUserWants = this.userProfile.whatUserWants;

  constructor(
    protected userProfileService: UserProfileService,
  ) {

  }

  ngOnInit() {
  }

  save() {
    this.userProfileService.saveUserProfile(this.userProfile);
  }

}
