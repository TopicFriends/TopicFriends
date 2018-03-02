/* TODO: rename to WantedTopic for consistency? */
import {initFromObject} from '../util/util'
import {TagEntry} from './tag-entry'
import {getDictionaryValuesAsArray} from '../shared/utils'
import {TagInclusions} from '../shared/TagInclusions'


export class TopicInterest {
  // idea: hourly / per-minute rates (in Pro version? :) )
  // name: string;
  constructor(
    public tagEntry: TagEntry,
    // public active?: boolean,
    // public level?: string, // level of expertise

  ) {

  }
  // potential in the future: where. E.g. play soccer where
}

// TODO: split into what-user-wants-service


/** Other potential names: TopicGroup */
export class WantedTopics {
  active?: boolean;

  // we can add more metadata, like time periods

  /** Must match at least that number of topics */
  atLeast? = 1;
  public topics?: TagInclusions = {};
  public subGroups?: {
    [groupId: string]: WantedTopics
  } = {}

  static extractTags(dictionary: WantedTopics): TopicInterest[] {
    if ( ! dictionary ) {
      return []
    }
    return getDictionaryValuesAsArray(dictionary.topics);
  }

}

/** Other potential names: GiveReceive, PassiveActive, FindAndBecome */
export class SupplyDemand {
  // idea: hourly rates (range)
  supply?: WantedTopics = new WantedTopics(); // root group of topics
  demand?: WantedTopics = new WantedTopics();
  // we can add more metadata, like time period
}

// Cool idea: calculate count / show: all matches between all users
// and all matches from current user to other users
export class MatchResults {
  matchScore: number;
  topicMatches: TopicInterest[];
  // TODO: fine-grained match results later on (not necessary for MVP)
}

export class SymmetricInteractions {
  // todo? "I'm actively using" ?
  // todo: general interests? (generally chat about)
  /** General exchange of knowledge/skills and brainstorming, pair programming */
  exchange?: WantedTopics;
  pairProgramming?: WantedTopics; /*
   TODO: pair programming supply-demand (as "follower/leader" / join pair programming of existing code
   vs have the existing code) */
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
  // TODO: discussOverBreakfast, discussOverLunch, discussOverDinner, discussOverWalking|Hiking|Bicycle
}

export class SupplyDemandInteractions {
  // The more heavy something is, the more it should be in supplyDemand
  //  as opposed to symmetric, because it might require organizers, e.g. hackathon, workshop, presentation,
  /** though, hackathon is a special case in which it could work with or without organizers, meaning
   *  the matching algorithm should have a mode in which it will also match in a case where, let's say everyone
   *  wants to organize, or everyone just wants to participate.
   For now we are doing only symmetric for hackathon */
  intern?: SupplyDemand;
  /** Mentor / advisor (should advisor be separate from mentor?) */
  mentor?: SupplyDemand;
  freelance?: SupplyDemand;

  /** Code/architecture/database review */
  review?: SupplyDemand;
  job?: SupplyDemand;
  // advising?: SupplyDemand,
  sponsorEvents?: SupplyDemand;
  coFounder?: SupplyDemand;
  businessPartner?: SupplyDemand;
  /** co-founder / business partner; rename to just coFounder for consistency */
  // coFounderSpecializingIn?: SupplyDemand,
  // work on hobby project together,
  /** Work on open-source together; probably move to symmetric */
  contributeToOpenSource?: SupplyDemand;
  /** probably move to symmetric */
  organizeHackathon?: SupplyDemand;
  /** I would like to organize/participate */ /** For hackathon in supplyDemand we could
 have a stronger wording: "I would like to organize hackathon."
 / "I would like to participate in an **organized** hackathon" */
  presentation?: SupplyDemand;      /** I'm interested in making/attending presentation */

  /* Krzysztof Falkowicz: find presenter / be presenter */

  workshop?: SupplyDemand;
  // TODO: code review (kinda similar to pair programming)
}

/* Other names:
 UserInterestedIn
 UserInterests
 WhatUserWishes
 */
export class UserInterests {

  byInteractionMode?: {
    symmetric?: SymmetricInteractions,
    supplyDemand?: SupplyDemandInteractions
  };

  public static getTopicMatchesWithinInteractionMode(
    // topics1: { [topicInclusionId: string]: TopicInterest },
    topics1: TopicInterest[],
    topics2: TopicInterest[] ): TopicInterest[] {
    return topics1.filter((topic1: TopicInterest) => {
      return topics2.filter((topic2: TopicInterest) => {
          // later use id-s
          return topic1.tagEntry.name === topic2.tagEntry.name;
        }).length >= 1;
    });
  }

  /** getSymmetricExchangeInterestsMatchWith */
  public static getInterestsMatchWith(interests1: UserInterests, other: UserInterests): MatchResults {
    let topicMatches = UserInterests.getTopicMatchesWithinInteractionMode(
      getDictionaryValuesAsArray(
        interests1.byInteractionMode &&
        interests1.byInteractionMode.symmetric &&
        interests1.byInteractionMode.symmetric.exchange &&
        interests1.byInteractionMode.symmetric.exchange.topics),
      getDictionaryValuesAsArray(
        other.byInteractionMode &&
        other.byInteractionMode.symmetric &&
        other.byInteractionMode.symmetric.exchange &&
        other.byInteractionMode.symmetric.exchange.topics)
    )
    const topicMatches2 = UserInterests.getTopicMatchesWithinInteractionMode(
      getDictionaryValuesAsArray(
        interests1.byInteractionMode &&
        interests1.byInteractionMode.symmetric &&
        interests1.byInteractionMode.symmetric.pairProgramming &&
        interests1.byInteractionMode.symmetric.pairProgramming.topics),
      getDictionaryValuesAsArray(
        other.byInteractionMode &&
        other.byInteractionMode.symmetric &&
        other.byInteractionMode.symmetric.pairProgramming &&
        other.byInteractionMode.symmetric.pairProgramming.topics)
    )
    const topicMatches3 = UserInterests.getTopicMatchesWithinInteractionMode(
      getDictionaryValuesAsArray(
        interests1.byInteractionMode &&
        interests1.byInteractionMode.symmetric &&
        interests1.byInteractionMode.symmetric.hackathon &&
        interests1.byInteractionMode.symmetric.hackathon.topics),
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
    const allSupplyDemandOfMe =
      this.byInteractionMode &&
      this.byInteractionMode.supplyDemand
    if ( allSupplyDemandOfOther && allSupplyDemandOfMe ) {
      for (const interactionModeKey in allSupplyDemandOfOther) {
        if(allSupplyDemandOfOther.hasOwnProperty(interactionModeKey)) {
          const currentSupplyDemandOfOther: SupplyDemand = allSupplyDemandOfOther[interactionModeKey]; // e.g. mentor
          const currentSupplyDemandOfMe: SupplyDemand = allSupplyDemandOfMe[interactionModeKey];
          // currentSupplyDemandOfOther.supply.
          // getTopicMatchesWithinInteractionMode
          // const ourTopics = WantedTopics.extractTags(ourSupplyDemand);

          // if ( ourTopics ) {
          // for (const topicInclusionId in supplyDemandPerMode) {
          // supplyDemandPerMode[topicInclusionId];
          // matchScore += UserInterests.getTopicMatchesWithinInteractionMode().length;
          // }
          // supplyDemandOfOther2.name;
          // }
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

  public static hasTopicId(interests: UserInterests, topicId: string) {
    let topicInclusions: TagInclusions =
      interests &&
      interests.byInteractionMode &&
      interests.byInteractionMode.symmetric &&
      interests.byInteractionMode.symmetric.exchange &&
      interests.byInteractionMode.symmetric.exchange.topics;

    if(topicInclusions) {
      for(let key in topicInclusions) {
        if(topicInclusions.hasOwnProperty(key)) {
          if(topicInclusions[key].tagEntry.id === topicId) {
            return true;
          }
        }
      }
    }
    return false;
  }

  constructor(initFrom: UserInterests) {
    initFromObject<UserInterests>(this, initFrom);
  }
}
