///<reference path="./user-profile.service.ts"/>
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {UserOtherProfiles, UserProfile, UserProfileService} from './user-profile.service'
import {SymmetricInteractions, TopicInterest, UserInterests} from './user-interests'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('userOtherProfiles') userOtherProfilesComponent: UserOtherProfilesComponent

  userProfile: UserProfile;
  userInterestsObservable: Observable<UserInterests>;
  userProfileObservable: Observable<UserProfile>;

  public _userProfileForm: FormGroup;

  displayName = new FormControl(/*Validators.required*/);

  showSupplyDemand = false;

  options = [
    'Angular', 'Ionic', 'Firebase',
    // 'Protractor', 'Karma', 'Jasmin',
    // 'PHP', 'Material Design', 'TypeScript', 'Django', 'Python', 'Ruby', 'Ruby On Rails',
    // 'PeopleMatcher',
    // 'Android', 'Kotlin', 'Java'
  ];

  whatUserWants = UserInterests.fromJson({});

  symmetricInteractions = new SymmetricInteractions();

  constructor(
    private _fb: FormBuilder,
    protected userProfileService: UserProfileService,
    public authService: AuthService,
  ) {
    this.authService.user.subscribe((user) => {
      if ( user ) {
        this.displayName.setValue(user.displayName);
      }
    });

    // TODO: extract WhatUserWantsForm !
    this._userProfileForm = this._fb.group({
      displayName: this.displayName,
      wantToBeFreelance: ['Design, DevOps, QA'],
      wantToHireFreelance: ['Angular, React, Ionic'],
      wantToFindMentor: [''],
      wantToBecomeMentor: [''],
    });
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userProfileObservable = this.userProfileService.getProfile();
      this.userProfileObservable.subscribe((userProfile: UserProfile) => {
        this.userProfile = userProfile;
        this._userProfileForm.patchValue(userProfile)
        // this.whatUserWants = this.;
        console.log('new user profile!', userProfile);
        if ( ! (<any>userProfile).whatUserWants ) {
          this.userProfile = new UserProfile();
        }
      });
      this.userInterestsObservable = this.userProfileService.getUserInterests();
      this.userInterestsObservable.subscribe((userInterests: UserInterests) => {

      });
        // this.userId = user && user.uid;
      // this.myUserData = this.db.userDataById(this.userId);
    })
  }

  updateUserProfile(event) {
    console.log(event);
    // TODO save function
  }

  getOptionsNames(){
    return this.options;
  }

  updateWantExchange(event: {tagList: TopicInterest[]}) {
    // console.log('updateWantExchange', event);
    console.log('updateWantExchange', event);
    console.log('updateWantExchange', this.whatUserWants);
    // this.whatUserWants.byInteractionMode.symmetric.exchange.topics = {};
    this.symmetricInteractions.exchange = {
      topics: this.createTopicsDictionary(event.tagList),
    };

  }

  updateWantHackathon(event: {tagList: TopicInterest[]}) {
    this.symmetricInteractions.hackathon = {
      topics: this.createTopicsDictionary(event.tagList),
    };
  }

  updateWantPairProgramming(event: {tagList: TopicInterest[]}) {
    this.symmetricInteractions.pairProgramming = {
      topics: this.createTopicsDictionary(event.tagList),
    };
  }

  private createTopicsDictionary(topics: TopicInterest[]) {
    let ret = {};
    let i = 0;
    for ( const topic of topics ) {
      ret[i] = topic;
      i++;
    }
    return ret;
  }

  save() {
    console.log('this.displayName.value', this.displayName.value);
    this.userProfile.displayName = this.displayName.value;
    const otherProfiles = {
      linkedIn: {
        userName: this.userOtherProfilesComponent.otherProfileLinkedIn.value
      }
    };
    // this..profileFacebook = this.displayName.value;
    const whatUserWants2 = UserInterests.fromJson({
      byInteractionMode: {
        symmetric: this.symmetricInteractions,
      }
    })
    console.log('save()', whatUserWants2)
    // this.userProfileObservable =
    this.userProfileService.saveUserProfile(
      this.userProfile,
      whatUserWants2,
      otherProfiles,
    );
  }

}
