/* TODO: rename to WantedTopic for consistency? */
import {initFromObject} from '../../util/util'
import {TagEntry} from '../../topics/topics-shared/tag-entry'
import {getDictionaryValuesAsArray} from '../../util/utils'
import {TagInclusions} from '../../topics/topics-core/TagInclusions'


export class TopicInterest {
  // idea: hourly / per-minute rates (in Pro version? :) )
  // name: string;
  constructor(public tagEntry: TagEntry,
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
    if (!dictionary) {
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
  constructor(
    public matchScore: number,
    public topicMatches: TopicInterest[],
    public isBasedOnLoggedInUser = true
  ) {
  }

  static readonly valueWhenNoLoggedUser = new MatchResults(0, [], false)
  // TODO: fine-grained match results later on (not necessary for MVP)
}

export class SymmetricInteractions {
  // todo? "I'm actively using" ?
  // todo: general interests? (generally chat about)
  /** TODO: decide field name: sports and fun and socialising (and interests?) */
  sportsAndFun?: WantedTopics;
  /** General exchange of knowledge/skills and brainstorming, pair programming */
  exchange?: WantedTopics;
  pairProgramming?: WantedTopics;
  /*
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
  /** I would like to organize/participate */
  /** For hackathon in supplyDemand we could
   have a stronger wording: "I would like to organize hackathon."
   / "I would like to participate in an **organized** hackathon" */
  presentation?: SupplyDemand;
  /** I'm interested in making/attending presentation */

  /* Krzysztof Falkowicz: find presenter / be presenter */

  workshop?: SupplyDemand;
  // TODO: code review (kinda similar to pair programming)
  // teach, give courses
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

  public static getTopicMatchesWithinInteractionMode(// topics1: { [topicInclusionId: string]: TopicInterest },
                                                     topics1: TopicInterest[],
                                                     topics2: TopicInterest[]): TopicInterest[] {
    return topics1.filter((topic1: TopicInterest) => {
      return topics2.filter((topic2: TopicInterest) => {
        // later use id-s
        return (
          (topic1.tagEntry.id ===
            topic2.tagEntry.id)
          ||
          (topic1.tagEntry.name ===
            topic2.tagEntry.name)
        );
      }).length >= 1;
    });
  }

  /** getSymmetricExchangeInterestsMatchWith */
  public static getInterestsMatchWith(interests1: UserInterests, other: UserInterests): MatchResults {

    let topicMatches = UserInterests.getTopicsMatchedWithSymmetricInteractionMode(interests1, other);
    topicMatches = topicMatches.concat(UserInterests.getTopicsMatchedWithSupplyDemandInteractionMode(interests1, other));
    const matchScore = topicMatches.length;
    return new MatchResults(
      matchScore, // FIXME
      topicMatches,
    )
  }

  public static getTopicsMatchedWithSymmetricInteractionMode(userInterests: UserInterests, otherUserInterests: UserInterests) {
    let matchedTopics = [];
    let userSymmetricInterests = userInterests &&
      userInterests.byInteractionMode &&
      userInterests.byInteractionMode.symmetric;
    let otherUserSymmetricInterests = otherUserInterests &&
      otherUserInterests.byInteractionMode &&
      otherUserInterests.byInteractionMode.symmetric;

    if (userSymmetricInterests && otherUserSymmetricInterests) {
      for (let interest in userSymmetricInterests) {
        if (userSymmetricInterests.hasOwnProperty(interest) && otherUserSymmetricInterests.hasOwnProperty(interest)) {
          if(userSymmetricInterests[interest].topics && otherUserSymmetricInterests[interest].topics) {
            matchedTopics = matchedTopics.concat(
              UserInterests.getTopicMatchesWithinInteractionMode(
                getDictionaryValuesAsArray(userSymmetricInterests[interest].topics),
                getDictionaryValuesAsArray(otherUserSymmetricInterests[interest].topics)
              )
            );
          }
        }
      }
    }
    return matchedTopics;
  }


  public static getTopicsMatchedWithSupplyDemandInteractionMode(userInterests: UserInterests, otherUserInterests: UserInterests) {
    let matchedTopics = [];
    let userSupplyDemandInterests = userInterests &&
      userInterests.byInteractionMode &&
      userInterests.byInteractionMode.supplyDemand;
    let otherUserSupplyDemandInterests = otherUserInterests &&
      otherUserInterests.byInteractionMode &&
      otherUserInterests.byInteractionMode.supplyDemand;

    if (userSupplyDemandInterests && otherUserSupplyDemandInterests) {
      for (let interest in userSupplyDemandInterests) {
        if (userSupplyDemandInterests.hasOwnProperty(interest) && otherUserSupplyDemandInterests.hasOwnProperty(interest)) {
          if(userSupplyDemandInterests[interest] && otherUserSupplyDemandInterests[interest]) {
            if(userSupplyDemandInterests[interest].supply && otherUserSupplyDemandInterests[interest].demand) {
              matchedTopics = matchedTopics.concat(
                UserInterests.getTopicMatchesWithinInteractionMode(
                  getDictionaryValuesAsArray(userSupplyDemandInterests[interest].supply.topics),
                  getDictionaryValuesAsArray(otherUserSupplyDemandInterests[interest].demand.topics)
                )
              );
            }
            if(userSupplyDemandInterests[interest].demand && otherUserSupplyDemandInterests[interest].supply) {
              matchedTopics = matchedTopics.concat(
                UserInterests.getTopicMatchesWithinInteractionMode(
                  getDictionaryValuesAsArray(userSupplyDemandInterests[interest].demand.topics),
                  getDictionaryValuesAsArray(otherUserSupplyDemandInterests[interest].supply.topics)
                )
              );
            }
          }
        }
      }
    }
    return matchedTopics;
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
    if (allSupplyDemandOfOther && allSupplyDemandOfMe) {
      for (const interactionModeKey in allSupplyDemandOfOther) {
        if (allSupplyDemandOfOther.hasOwnProperty(interactionModeKey)) {
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
    return new MatchResults(
      matchScore + 999, // FIXME
      [], // FIXME
    )
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
    let tagInclusionsList: TagInclusions[] = [];

    //Check for symmetric interests
    tagInclusionsList = UserInterests.getSymmetricInterests(interests);
    //Check for supply/demand interests
    tagInclusionsList = tagInclusionsList.concat(UserInterests.getSupplyInterests(interests));
    tagInclusionsList = tagInclusionsList.concat(UserInterests.getDemandInterests(interests));

    //Check if our topic is in some of those files.
    for (let topicInclusions of tagInclusionsList) {
      for (let key in topicInclusions) {
        if (topicInclusions.hasOwnProperty(key)) {
          if (topicInclusions[key].tagEntry.id === topicId) {
            return true;
          }
        }
      }
    }
    return false;
  }

  static getSymmetricInterests(interests: UserInterests): TagInclusions[] {
    let tagInclusionsList = []
    let symmetricInterests = interests &&
      interests.byInteractionMode &&
      interests.byInteractionMode.symmetric;
    if (symmetricInterests) {
      for (let interest in symmetricInterests) {
        if (symmetricInterests.hasOwnProperty(interest)) {
          tagInclusionsList.push(symmetricInterests[interest].topics);
        }
      }
    }
    return tagInclusionsList;
  }

  static getSupplyInterests(interests: UserInterests): TagInclusions[] {
    let tagInclusionsList = []
    let supplyDemandInterests = interests &&
      interests.byInteractionMode &&
      interests.byInteractionMode.supplyDemand;
    if (supplyDemandInterests) {
      for (let interest in supplyDemandInterests) {
        if (supplyDemandInterests.hasOwnProperty(interest)) {
          if (supplyDemandInterests[interest].supply) {
            tagInclusionsList.push(supplyDemandInterests[interest].supply.topics);
          }
        }
      }
    }
    return tagInclusionsList;
  }

  static getDemandInterests(interests: UserInterests): TagInclusions[] {
    let tagInclusionsList = []
    let supplyDemandInterests = interests &&
      interests.byInteractionMode &&
      interests.byInteractionMode.supplyDemand;
    if (supplyDemandInterests) {
      for (let interest in supplyDemandInterests) {
        if (supplyDemandInterests.hasOwnProperty(interest)) {
          if (supplyDemandInterests[interest].demand) {
            tagInclusionsList.push(supplyDemandInterests[interest].demand.topics);
          }
        }
      }
    }
    return tagInclusionsList;
  }

  constructor(initFrom: UserInterests) {
    initFromObject<UserInterests>(this, initFrom);
  }
}
