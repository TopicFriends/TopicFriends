import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {initFromObject} from '../util/util';

/* TODO: rename to WantedTopic for consistency? */
export class TopicInterest {
  name: string;
  active?: boolean;
  topicId?;
  // potential in the future: where. E.g. play soccer where
}

/** TODO: better name */
export class WantedTopics {
  active?: boolean;
  public topics: {
    [/** Note: this is NOT the id of the topic itself */ topicInclusionId: string]: TopicInterest
  } = {};

  // topics: string;
  // we can add more metadata, like time period
}

/** Other potential names: GiveReceive, PassiveActive, FindAndBecome */
export class SupplyDemand {
  supply?: WantedTopics = new WantedTopics();
  demand?: WantedTopics = new WantedTopics();
  // we can add more metadata, like time period
}

export class MatchResults {
  matchScore: number;
  // TODO: fine-grained match results later on (not necessary for MVP)
}

export class WhatUserWants {

  byInteractionMode: {
    symmetric?: {
      /** General exchange of knowledge/skills and brainstorming, pair programming */
      exchange?: WantedTopics,
      pairProgramming?: WantedTopics,
      /** play together, e.g. soccer, chess */
      play?: WantedTopics,
      /** Watch together (/screening). E.g. watch Silicon Valley together, wink, wink :) */
      watch?: WantedTopics,
      // TODO: party (specifies what kinds of parties)
      // TODO: socialize (specifies what kinds of socializing)
    },
    supplyDemand?: {
      intern?: SupplyDemand,
      mentor?: SupplyDemand,
      freelance?: SupplyDemand,


      /** Code review */
      review?: SupplyDemand,
      job?: SupplyDemand,
      advising?: SupplyDemand,
      sponsorEvents?: SupplyDemand,
      coFounderSpecializingIn?: SupplyDemand,
      // work on hobby project together,
      /** Work on open-source together; probably move to symmetric */
      contributeToOpenSource?: SupplyDemand,
      /** probably move to symmetric */
      hackathon?: SupplyDemand,
    }
  };

  public static getTopicMatchesWithinInteractionMode(
      // topics1: { [topicInclusionId: string]: TopicInterest },
      topics1: TopicInterest[],
      topics2: TopicInterest[] ): TopicInterest[] {
    return topics1.filter((topic1: TopicInterest) => {
      return topics2.filter((topic2: TopicInterest) => {
        // later use id-s
        return topic1.name === topic2.name;
      }).length >= 1;
    });
  }

  public getInterestsMatchWith?(other: WhatUserWants): MatchResults {
    let matchScore = 0;
    const allSupplyDemandOfOther =
      other.byInteractionMode &&
      other.byInteractionMode.supplyDemand;
    if ( allSupplyDemandOfOther && this.byInteractionMode && this.byInteractionMode.supplyDemand ) {
      for (const interactionModeKey in allSupplyDemandOfOther) {
        const supplyDemandOfOther2: SupplyDemand = allSupplyDemandOfOther[interactionModeKey]; // e.g. mentor
        const ourSupplyDemand = this.byInteractionMode.supplyDemand[interactionModeKey];
        const ourTopics = ourSupplyDemand && ourSupplyDemand.topics;
        if ( ourTopics ) {
          for (const topicInclusionId in supplyDemandPerMode) {
            supplyDemandPerMode[topicInclusionId];
            matchScore += WhatUserWants.getTopicMatchesWithinInteractionMode().length;
          }
          supplyDemandOfOther2.name;
        }
      }
    }
    return {
      matchScore: matchScore + 999, // FIXME
    }
  }


  // TODO: old way, contemplate and remove:
  // wantToFindMentor: WantedTopics;
  // wantToBecomeMentor: WantedTopics;
  // wantToWorkAsFreelanceFor: WantedTopics;
  // wantToHireFreelanceFor: WantedTopics;
  // wantToGetSponsorForEvents: WantedTopics;
  // wantToSponsorEvents: WantedTopics;

  public static fromJson(initFrom: WhatUserWants) {
    return new WhatUserWants(initFrom);
  }

  constructor(initFrom: WhatUserWants) {
    initFromObject<WhatUserWants>(this, initFrom);
  }
}

export class UserProfile {
  name: string;
  suername: string;
  company: string;
  role: string;
  whatUserWants: WhatUserWants; // = new WhatUserWants();

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
  whatUserWantsList: FirebaseListObservable<any>;
  examplesList: FirebaseListObservable<any>;
  myUserProfile = this.db.object(`UserProfile/${this.userId}`);
  myWhatUserWants = this.db.object(`WhatUserWants/${this.userId}`);

  constructor(private db: AngularFireDatabase,
              private authService: AuthService,) {
    // TODO: have some intermediate path for prod/test db, etc.
    this.userProfiles = db.list('UserProfile'); // just example
    this.whatUserWantsList = db.list('WhatUserWants');
    this.examplesList = db.list('examplesList');
    authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userId = user && user.uid;
    })

    this.getWhatUsersWant().subscribe((wuws) => {
      console.log('getWhatUsersWant()', wuws);
      console.log(
        "wuws[0].byInteractionMode.freelance.supply.topics['pushId1'].name;",
        wuws[0].byInteractionMode.supplyDemand.freelance.supply.topics['pushId1'].name);
      this.saveWhatUserWants('exampleSavedWuw', wuws[0]);
    })
  }

  public saveUserProfile(data: UserProfile) {
    // this.userProfiles.update(this.userId, data); // FIXME: nasty crude quick stub
    // this.userProfiles.update(this.userId, {some: 'example'}); // FIXME: nasty crude quick stub

    /* NOTE: this will be hopefully wrapped in some OOP objects in TS,
     to make it work nicely with other services/components
     */
    const userId = this.userId;
    this.userProfiles.update(userId, {
      displayName: this.authService.userSaved.displayName,
    }); // FIXME: nasty crude quick stub

    /* separating this into another firebase location, to not have to read all that if we just want
     * to read a list of users */
    const whatUserWants: WhatUserWants = WhatUserWants.fromJson({
      byInteractionMode: {
        supplyDemand: {
          freelance: {
            supply: {
              topics: {
                /** note: those push ids, like 'pushId1' are not id-s of the topics (like Angular),
                 but rather the ids of the association between the topic and whatUserWants.
                 This is in order to leave the option to have many-to-many
                 (as we might also add more metadata later, like enabled/disabled, comments, skill level).
                 And users could be able to have multiple variants of the same skill
                 enabled/disabled and with different metadata.
                 This is not needed for MVP, but I would like to
                 keep that option possible in the data structure.
                 */
                pushId1: {
                  active: true,
                  /** For now, for looking for matching users, we can ignore the foreign key (topicId)
                   * and just compare by name */
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
            }
          }
        }
      }
    });
    this.whatUserWantsList.update(userId, {
      whatUserWants: {
        whatUserWants
      }
    }); // FIXME: nasty crude quick stub
  }

  getProfile(): Observable<UserProfile> {
    return this.myUserProfile;
  }

  getWhatUsersWant(): Observable<WhatUserWants[]> {
    return null;
    // return this.whatUserWantsList.map((wuws: any[]) => {
    //   return wuws.map((wuw) => {
    //     return WhatUserWants.fromJson(wuw.whatUserWants);
    //   });
    // });
  }

  public saveWhatUserWants(userId, whatUserWants: WhatUserWants) {
    this.examplesList.update(userId, whatUserWants);
  }

}
