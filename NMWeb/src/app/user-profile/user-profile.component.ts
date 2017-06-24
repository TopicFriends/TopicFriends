import { Component, OnInit } from '@angular/core';
import {UserProfile, UserProfileService, WhatUserWants} from './user-profile.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile;
  userProfileObservable;

  private _userProfileForm: FormGroup;

  constructor( 
      private _fb: FormBuilder,
      protected userProfileService: UserProfileService) {

    this._userProfileForm = this._fb.group({
      wantToBeFreelance: ['Desing, Devops, QA', Validators.required],
      wantToHireFreelance: ['Angular, React, Ionic', Validators.required],
    });
  }

  ngOnInit() {
    this.userProfileObservable = this.userProfileService.getProfile();
    this.userProfileObservable.subscribe(p => {
      this.userProfile = p;
      // this.whatUserWants = this.userProfile.whatUserWants;
      console.log('new user profile!', p);
      if ( ! (<any>p).whatUserWants ) {
        this.userProfile = new UserProfile();
      }
    });
  }

  save() {
    this.userProfileObservable = this.userProfileService.saveUserProfile(this.userProfile);
  }

}
