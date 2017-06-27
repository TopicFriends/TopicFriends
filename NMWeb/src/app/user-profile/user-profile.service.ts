import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

export class WantedTopics {
  topics: string;
  // we can add more metadata, like time period
}

/** Other potential names: GiveReceive, PassiveActive, FindAndBecome */
export class SupplyDemand {
  supply: WantedTopics = new WantedTopics();
  demand: WantedTopics = new WantedTopics();
  // we can add more metadata, like time period
}

export class WhatUserWants {
  /** General exchange of knowledge/skills and brainstorming, pair programming */
  exchange: WantedTopics;
  pairProgramming: WantedTopics;

  intern: SupplyDemand = new SupplyDemand();
  mentor: SupplyDemand = new SupplyDemand();
  freelance: SupplyDemand = new SupplyDemand();
  job: SupplyDemand  = new SupplyDemand();
  sponsorEvents: SupplyDemand = new SupplyDemand();
  coFounderSpecializingIn: SupplyDemand = new SupplyDemand();

  // work on hobby project together
  /** Work on open-source together */
  contributeToOpenSource: SupplyDemand = new SupplyDemand();
  hackathon: SupplyDemand = new SupplyDemand();

  // TODO: old way, contemplate and remove:
  wantToFindMentor: WantedTopics;
  wantToBecomeMentor: WantedTopics;
  wantToWorkAsFreelanceFor: WantedTopics;
  wantToHireFreelanceFor: WantedTopics;
  wantToGetSponsorForEvents: WantedTopics;
  wantToSponsorEvents: WantedTopics;

}

export class UserProfile {
  name: string;
  suername: string;
  company: string;
  role: string;
  whatUserWants: WhatUserWants = new WhatUserWants();

  profileLinkedIn: string;
  profileGitHub: string;
  profileStackOverflow: string;
  profileTwitter: string;
  profileFacebook: string;
}

@Injectable()
export class UserProfileService {

  // userId = '-KnIHsSBYiDR08YnJog5';
  userId;

  userProfiles: FirebaseListObservable<any>;
  myUserProfile = this.db.object(`UserProfile/${this.userId}`);

  constructor(
      private db: AngularFireDatabase,
      private authService: AuthService,
  ) {
    this.userProfiles = db.list('UserProfile'); // just example
    authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userId = user && user.uid;
    })
  }


  public saveUserProfile(data: UserProfile) {
    // this.userProfiles.update(this.userId, data); // FIXME: nasty crude quick stub
    // this.userProfiles.update(this.userId, {some: 'example'}); // FIXME: nasty crude quick stub
    this.userProfiles.update(this.userId, {
      displayName: this.authService.userSaved.displayName,
      whatUserWants: {
        /** note: those push ids, like 'pushId1' are not id-s of the topics (like Angular),
         but rather the ids of the association between the topic and whatUserWants.
         This is in order to leave the option to have many-to-many
         (as we might also add more metadata later, like enabled/disabled, comments, skill level).
         And users could be able to have multiple variants of the same skill enabled/disabled and with different metadata.
         This is not needed for MVP, but I would like to keep that option open in the data structure.
         */
        pushId1: {
          active: true,
          /** For now, for looking for matching users, we can ignore the foreign key (topicId) and just compare by name */
          topicId: 'someForeignKey_Angular',
          name: 'Angular',
        },
        pushId2: {
          active: true,
          topicId: 'someForeignKey_Ionic',
          name: 'Ionic',
        },
        pushId3: {
          active: true,
          name: 'WordPress',
          topicId: 'someForeignKey_WordPress',
        },
      }
    }); // FIXME: nasty crude quick stub
  }

  getProfile(): Observable<UserProfile> {
    return this.myUserProfile;
  }
}
