import { Injectable } from '@angular/core';

export class WantedTopics {
  topics: string;
  // we can add more metadata, like time period
}

/** Other potential names: GiveReceive, PassiveActive, FindAndBecome */
export class SupplyDemand {
  supply: WantedTopics;
  demand: WantedTopics;
  // we can add more metadata, like time period
}

export class WhatUserWants {
  /** General exchange of knowledge/skills and brainstorming */
  exchange: WantedTopics;

  intern: SupplyDemand;
  mentor: SupplyDemand;
  freelance: SupplyDemand;
  job: SupplyDemand;
  sponsorEvents: SupplyDemand;
  coFounderSpecializingIn: SupplyDemand;

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

  whatUserWants: WhatUserWants;

}

@Injectable()
export class UserProfileService {



  constructor() { }

}
