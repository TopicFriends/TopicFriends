import {WantedTopics, WhatUserWants} from './user-profile.service';
/**
 * Created by annab on 29/06/2017.
 */

export class ExampleData {
  // public User_1_wantsEverything: WhatUserWants = {
  //   byInteractionMode: {
  //     symmetric: {
  //       exchange: {
  //         topics: {
  //           pushId1: {
  //             active: true,
  //             topicId: 'someForeignKey_Angular',
  //             name: 'Angular',
  //           },
  //           pushId2: {
  //             active: true,
  //             topicId: 'someForeignKey_Ionic',
  //             name: 'Ionic',
  //           },
  //           pushId3: {
  //             active: true,
  //             name: 'WordPress',
  //             topicId: 'someForeignKey_WordPress',
  //           },
  //         }
  //       },
  //       pairProgramming: {},
  //       play: {},
  //     },
  //     supplyDemand: {
  //       intern: {},
  //       mentor: {},
  //       freelance: {},
  //       job?: SupplyDemand,
  //       advising?: SupplyDemand,
  //       sponsorEvents?: SupplyDemand,
  //       coFounderSpecializingIn?: SupplyDemand,
  //       // work on hobby project together,
  //       /** Work on open-source together; probably move to symmetric */
  //       contributeToOpenSource?: SupplyDemand,
  //       /** probably move to symmetric */
  //       hackathon?: SupplyDemand,
  //     }
  //   }
  // }


  public User_2_wantsNothing: WhatUserWants;

  // number: set, letter: data matching
  public User_3a_wantsToMentorOnIonic: WhatUserWants;

  public User_3b_wantsToBeMentoredOnIonic: WhatUserWants;

  public User_3c_wantsToBeMentoredOnBusiness: WhatUserWants;

  public User_4a_wantsFreelancingJob: WhatUserWants;

  public User_4b_wantsToHireFreelancer: WhatUserWants;

  public User_4c_wantsToHireFreelancer: WhatUserWants;

  public User_5a_wantsAnInternship: WhatUserWants;

  public User_5b_wantsToHireAnIntern: WhatUserWants;

  public User_6a_wantsAJob: WhatUserWants;

  public User_6b_wantsToHireForJob: WhatUserWants;

  // TODO
}
