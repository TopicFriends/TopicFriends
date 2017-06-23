import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";

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
  /** General exchange of knowledge/skills and brainstorming */
  exchange: WantedTopics;

  intern: SupplyDemand = new SupplyDemand();
  mentor: SupplyDemand = new SupplyDemand();
  freelance: SupplyDemand = new SupplyDemand();
  job: SupplyDemand  = new SupplyDemand();
  sponsorEvents: SupplyDemand = new SupplyDemand();
  coFounderSpecializingIn: SupplyDemand = new SupplyDemand();

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

  whatUserWants: WhatUserWants = new WhatUserWants();

}

@Injectable()
export class UserProfileService {


  userProfiles: FirebaseListObservable<any>;
  myUserProfile = this.db.object('UserProfile/-KnIHsSBYiDR08YnJog5');

  constructor(
      private db: AngularFireDatabase,
  ) {
    this.userProfiles = db.list('UserProfile'); // just example
  }


  public saveUserProfile(data: UserProfile) {
    this.userProfiles.push(data); // FIXME: nasty crude quick stub
  }

  getProfile(): Observable<UserProfile> {
    return this.myUserProfile;
  }
}
