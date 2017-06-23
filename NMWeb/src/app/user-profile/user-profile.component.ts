import { Component, OnInit } from '@angular/core';
import {UserProfile, WhatUserWants} from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile;

  constructor() { }

  ngOnInit() {
  }

  save() {

  }

}
