import { Component, OnInit } from '@angular/core';
import {SymmetricInteractions, TopicInterest, UserProfile, UserProfileService, WhatUserWants} from './user-profile.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {



  userProfile: UserProfile;
  userProfileObservable;

  public _userProfileForm: FormGroup;

  myControl = new FormControl();

  options = ['Angular', 'Ionic', 'Firebase',
    'Protractor', 'Karma', 'Jasmin',
    'PHP', 'Material Design', 'TypeScript', 'Django', 'Python', 'Ruby', 'Ruby On Rails'];
  filteredOptions: Observable<string[]>;
  whatUserWants = WhatUserWants.fromJson({});

  symmetricInteractions = new SymmetricInteractions();

  constructor(
    private _fb: FormBuilder,
    protected userProfileService: UserProfileService,
    public authService: AuthService,
  ) {

    // FIXME: extract WhatUserWantsForm !
    this._userProfileForm = this._fb.group({
      wantToBeFreelance: ['Design, DevOps, QA'],
      wantToHireFreelance: ['Angular, React, Ionic'],
      wantToFindMentor: [''],
      wantToBecomeMentor: [''],
      profileLinkedIn: [''],
      myControl: [''],
      // myControl: [''],
    });
  }

  ngOnInit() {
    this.userProfileObservable = this.userProfileService.getProfile();
    this.userProfileObservable.subscribe(p => {
      this.userProfile = p;
      this.whatUserWants = this.userProfile.whatUserWants;
      console.log('new user profile!', p);
      if ( ! (<any>p).whatUserWants ) {
        this.userProfile = new UserProfile();
      }
    });
    // this.filteredOptions = this.myControl.valueChanges
    //   .startWith(null)
    //   .map(val => val ? this.filter(val) : this.options.slice());

  }

  updateUserProfile(event) {
    console.log(event);
    // TODO save function
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

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  save() {
    const whatUserWants2 = WhatUserWants.fromJson({
      byInteractionMode: {
        symmetric: this.symmetricInteractions,
      }
    })
    console.log('save()', whatUserWants2)
    this.userProfileObservable = this.userProfileService.saveUserProfile(this.userProfile, whatUserWants2);
  }

}
