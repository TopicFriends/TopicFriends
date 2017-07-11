import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {initFromObject} from '../util/util';
import {DbObject, DbService} from '../db.service'
import {DomainDbService} from '../domain-db.service'

/* TODO: rename to WantedTopic for consistency? */
export class TopicInterest {
  // idea: hourly / per-minute rates (in Pro version? :) )
  name: string;
  logo: string;
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
  // idea: hourly rates (range)
  supply?: WantedTopics = new WantedTopics();
  demand?: WantedTopics = new WantedTopics();
  // we can add more metadata, like time period
}

export class MatchResults {
  matchScore: number;
  topicMatches: TopicInterest[];
  // TODO: fine-grained match results later on (not necessary for MVP)
}

function getDictionaryValuesAsArray<T>(dictionary: { [p: string]: T }): T[] {
  const values = [];
  if ( dictionary ) {
    for (const key in dictionary) {
      values.push(dictionary[key]);
    }
  }
  return values;
}

export class SymmetricInteractions {
  /** General exchange of knowledge/skills and brainstorming, pair programming */
  exchange?: WantedTopics;
  pairProgramming?: WantedTopics;
  /** play together, e.g. soccer, chess */
  play?: WantedTopics;
  /** Watch together (/screening). E.g. watch Silicon Valley together, wink, wink :) */
  watch?: WantedTopics;
  // TODO: party (specifies what kinds of parties)
  // TODO: socialize (specifies what kinds of socializing)
  /** Keep in mind that hackathon also exists in supplyDemand for later more advanced use.
   This symmetric hackathon could be called "informal". */
  hackathon?: WantedTopics;
  /** Thanks, Luis Jose Sanchez, for the idea for the name "telehackathon" ;-) */
  teleHackathon?: WantedTopics;
}

/* Other names:
  UserInterestedIn
  UserInterests
  WhatUserWishes
 */
export class UserInterests {

  byInteractionMode?: {
    symmetric?: SymmetricInteractions,
    supplyDemand?: {    // The more heavy something is, the more it should be in supplyDemand
      //  as opposed to symmetric, because it might require organizers, e.g. hackathon, workshop, presentation,
      /** though, hackathon is a special case in which it could work with or without organizers, meaning
       *  the matching algorithm should have a mode in which it will also match in a case where, let's say everyone
       *  wants to organize, or everyone just wants to participate.
          For now we are doing only symmetric for hackathon */
      intern?: SupplyDemand,
      /** Mentor / advisor (should advisor be separate from mentor?) */
      mentor?: SupplyDemand,
      freelance?: SupplyDemand,

      /** Code/architecture review */
      review?: SupplyDemand,
      job?: SupplyDemand,
      advising?: SupplyDemand,
      sponsorEvents?: SupplyDemand,
      coFounderSpecializingIn?: SupplyDemand,
      // work on hobby project together,
      /** Work on open-source together; probably move to symmetric */
      contributeToOpenSource?: SupplyDemand,
      /** probably move to symmetric */
      organizeHackathon?: SupplyDemand,
      /** I would like to organize/participate */ /** For hackathon in supplyDemand we could
        have a stronger wording: "I would like to organize hackathon."
       / "I would like to participate in an **organized** hackathon" */
      presentation?: SupplyDemand,      /** I'm interested in making/attending presentation */
      workshop?: SupplyDemand,
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

  /** getSymmetricExchangeInterestsMatchWith */
  public getInterestsMatchWith?(other: UserInterests): MatchResults {
    let topicMatches = UserInterests.getTopicMatchesWithinInteractionMode(
      getDictionaryValuesAsArray(
        this.byInteractionMode &&
        this.byInteractionMode.symmetric &&
        this.byInteractionMode.symmetric.exchange &&
        this.byInteractionMode.symmetric.exchange.topics),
      getDictionaryValuesAsArray(
        other.byInteractionMode &&
        other.byInteractionMode.symmetric &&
        other.byInteractionMode.symmetric.exchange &&
        other.byInteractionMode.symmetric.exchange.topics)
    )
    const topicMatches2 = UserInterests.getTopicMatchesWithinInteractionMode(
      getDictionaryValuesAsArray(
        this.byInteractionMode &&
        this.byInteractionMode.symmetric &&
        this.byInteractionMode.symmetric.pairProgramming &&
        this.byInteractionMode.symmetric.pairProgramming.topics),
      getDictionaryValuesAsArray(
        other.byInteractionMode &&
        other.byInteractionMode.symmetric &&
        other.byInteractionMode.symmetric.pairProgramming &&
        other.byInteractionMode.symmetric.pairProgramming.topics)
    )
    const topicMatches3 = UserInterests.getTopicMatchesWithinInteractionMode(
      getDictionaryValuesAsArray(
        this.byInteractionMode &&
        this.byInteractionMode.symmetric &&
        this.byInteractionMode.symmetric.hackathon &&
        this.byInteractionMode.symmetric.hackathon.topics),
      getDictionaryValuesAsArray(
        other.byInteractionMode &&
        other.byInteractionMode.symmetric &&
        other.byInteractionMode.symmetric.hackathon &&
        other.byInteractionMode.symmetric.hackathon.topics)
    )
    topicMatches = topicMatches.concat(topicMatches2).concat(topicMatches3)
    const matchScore = topicMatches.length;
    return {
      matchScore: matchScore, // FIXME
      topicMatches: topicMatches,
    }
  }

  /** TODO target version. We simplify for now */
  public getInterestsMatchWithIncludingSupplyDemand?(other: UserInterests): MatchResults {
    const matchScore = 0;
    const allSupplyDemandOfOther =
      other.byInteractionMode &&
      other.byInteractionMode.supplyDemand;
    if ( allSupplyDemandOfOther && this.byInteractionMode && this.byInteractionMode.supplyDemand ) {
      for (const interactionModeKey in allSupplyDemandOfOther) {
        const supplyDemandOfOther2: SupplyDemand = allSupplyDemandOfOther[interactionModeKey]; // e.g. mentor
        const ourSupplyDemand = this.byInteractionMode.supplyDemand[interactionModeKey];
        const ourTopics = ourSupplyDemand && ourSupplyDemand.topics;
        if ( ourTopics ) {
          // for (const topicInclusionId in supplyDemandPerMode) {
            // supplyDemandPerMode[topicInclusionId];
            // matchScore += UserInterests.getTopicMatchesWithinInteractionMode().length;
          // }
          // supplyDemandOfOther2.name;
        }
      }
    }
    return {
      matchScore: matchScore + 999, // FIXME
      topicMatches: [], // FIXME
    }
  }


  // TODO: old way, contemplate and remove:
  // wantToFindMentor: WantedTopics;
  // wantToBecomeMentor: WantedTopics;
  // wantToWorkAsFreelanceFor: WantedTopics;
  // wantToHireFreelanceFor: WantedTopics;
  // wantToGetSponsorForEvents: WantedTopics;
  // wantToSponsorEvents: WantedTopics;

  public static fromJson(initFrom: UserInterests) {
    return new UserInterests(initFrom);
  }

  constructor(initFrom: UserInterests) {
    initFromObject<UserInterests>(this, initFrom);
  }
}

export class OtherProfile {
  userName?: string;
  url?: string;
  show?: boolean;
}

export class OtherProfiles {

  linkedIn?: OtherProfile;
  gitHub?: OtherProfile;
  stackOverflow?: OtherProfile;
  twitter?: OtherProfile;
  facebook?: OtherProfile;

  // Phone number/whatsapp
  // telegram (phone?)
  // google / hangouts
  // slack?

}

export class UserProfile {
  name?: string;
  suername?: string;
  company?: string;
  role?: string;
}

export class UserData {
  profile?: DbObject<UserProfile>;
  interests?: DbObject<UserInterests>;
  otherProfiles?: DbObject<OtherProfiles>;
}

@Injectable()
export class UserProfileService {

  // userId = '-KnIHsSBYiDR08YnJog5';
  userId;

  myUserData: UserData;

  constructor(
    private db: DomainDbService,
    private authService: AuthService,
  ) {
    authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userId = user && user.uid;
      this.myUserData = this.db.userDataById(this.userId);
    })

    // this.getWhatUsersWant().subscribe((wuws) => {
    //   console.log('getWhatUsersWant()', wuws);
    //   console.log(
    //     "wuws[0].byInteractionMode.freelance.supply.topics['pushId1'].name;",
    //     wuws[0].byInteractionMode.supplyDemand.freelance.supply.topics['pushId1'].name);
    //   this.saveWhatUserWants('exampleSavedWuw', wuws[0]);
    // })
  }

  public saveUserProfile(
    userProfile: UserProfile, interests: UserInterests,
    otherProfiles: OtherProfiles,
  ) {
    this.myUserData.profile.update(userProfile);

    /* NOTE: this will be hopefully wrapped in some OOP objects in TS,
     to make it work nicely with other services/components
     */
    const userId = this.userId;
    // this.userProfiles.update(userId, {
    //   displayName: this.authService.userSaved.displayName,
    // }); // FIXME: nasty crude quick stub

    /* separating this into another firebase location, to not have to read all that if we just want
     * to read a list of users */
    // whatUserWants = UserInterests.fromJson({
    //   byInteractionMode: {
    //     supplyDemand: {
    //       freelance: {
    //         supply: {
    //           topics: {
    //             /** note: those push ids, like 'pushId1' are not id-s of the topics (like Angular),
    //              but rather the ids of the association between the topic and whatUserWants.
    //              This is in order to leave the option to have many-to-many
    //              (as we might also add more metadata later, like enabled/disabled, comments, skill level).
    //              And users could be able to have multiple variants of the same skill
    //              enabled/disabled and with different metadata.
    //              This is not needed for MVP, but I would like to
    //              keep that option possible in the data structure.
    //              */
    //             pushId1: {
    //               active: true,
    //               /** For now, for looking for matching users, we can ignore the foreign key (topicId)
    //                * and just compare by name */
    //               topicId: 'someForeignKey_Angular',
    //               name: 'Angular',
    //             },
    //             pushId2: {
    //               active: true,
    //               topicId: 'someForeignKey_Ionic',
    //               name: 'Ionic',
    //             },
    //             pushId3: {
    //               active: true,
    //               name: 'WordPress',
    //               topicId: 'someForeignKey_WordPress',
    //             },
    //           }
    //         }
    //       }
    //     }
    //   }
    // });
    this.myUserData.interests.update(interests);
    this.myUserData.otherProfiles.update(otherProfiles);
  }

  getProfile(): Observable<UserProfile> {
    return this.myUserData.profile;
  }

  getOtherProfiles(): Observable<UserProfile> {
    return this.myUserData.otherProfiles;
  }

  getWhatUsersWant(): Observable<UserInterests[]> {
    return null;
    // return this.whatUserWantsList.map((wuws: any[]) => {
    //   return wuws.map((wuw) => {
    //     return UserInterests.fromJson(wuw.whatUserWants);
    //   });
    // });
  }

}
