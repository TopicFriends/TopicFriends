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
  exchange?: WantedTopics;
  pairProgramming?: WantedTopics;

  intern?: SupplyDemand = new SupplyDemand();
  mentor?: SupplyDemand = new SupplyDemand();
  /** Help / advice */
  help?: SupplyDemand = new SupplyDemand();
  freelance?: SupplyDemand = new SupplyDemand();
  job?: SupplyDemand  = new SupplyDemand();
  sponsorEvents?: SupplyDemand = new SupplyDemand();
  coFounderSpecializingIn?: SupplyDemand = new SupplyDemand();

  // work on hobby project together
  /** Work on open-source together */
  contributeToOpenSource?: SupplyDemand = new SupplyDemand();
  hackathon?: SupplyDemand = new SupplyDemand();

  // TODO: old way, contemplate and remove:
  wantToFindMentor?: WantedTopics;
  wantToBecomeMentor?: WantedTopics;
  wantToWorkAsFreelanceFor?: WantedTopics;
  wantToHireFreelanceFor?: WantedTopics;
  wantToGetSponsorForEvents?: WantedTopics;
  wantToSponsorEvents?: WantedTopics;

  static fromJson(initFrom: WhatUserWants) {
    return new WhatUserWants(initFrom);
  }

  constructor(initFrom: WhatUserWants) {
    Object.assign(this, initFrom);
  }

}

export class ExternalProfiles {
  profileLinkedIn?: string;
  profileGitHub?: string;
  profileStackOverflow?: string;
  profileTwitter?: string;
  profileFacebook?: string;
}

export class UserProfile {
  name?: string;
  surname?: string;
  company?: string;
  role?: string;
  whatUserWants?: WhatUserWants = WhatUserWants.fromJson({

  });

  externalProfiles?: ExternalProfiles;

  static fromJson(initFrom: UserProfile) {
    return new UserProfile(initFrom);
  }

  constructor(initFrom: UserProfile) {
    Object.assign(this, initFrom);
  }

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
    this.userProfiles.update(this.userId, {some: 'example'}); // FIXME: nasty crude quick stub
  }

  getProfile(): Observable<UserProfile> {
    return this.myUserProfile;
  }

  getUserProfiles(): Observable<UserProfile[]> {
    // FIXME: mock data
    return Observable.of(
      [
        UserProfile.fromJson({
          name: 'John Smith',
          surname: 'Smith',
          company: 'WillimbSys Inc.',
          externalProfiles: {
            profileLinkedIn: 'someLinkedIn'
          },
          whatUserWants: WhatUserWants.fromJson({

          })
        })
      ],
      [
        UserProfile.fromJson({
          name: 'Ruben Smith',
          surname: 'Smith',
          company: 'WillimbSys Inc.',
          externalProfiles: {
            profileLinkedIn: 'someLinkedIn'
          },
          whatUserWants: WhatUserWants.fromJson({
            // freelance: {
            //   demand: {
            //
            //   },
            //   supply: {
            //
            //   }
            // }
          })
        })
      ],
    );
  }
}
