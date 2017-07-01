import {UserProfile, WantedTopics, WhatUserWants} from './user-profile.service';

const angular =
  {
    active: true,
    topicId: 'someForeignKey_Angular',
    name: 'Angular',
  };

const ionic =
  {
    active: true,
    topicId: 'someForeignKey_Ionic',
    name: 'Ionic',
  };

const android =
  {
    active: true,
    name: 'Android',
    topicId: 'someForeignKey_Android',
  };

const graphicDesign =
  {
    active: true,
    name: 'Graphic Design',
    topicId: 'someForeignKey_GraphicDesign',
  }

// Firebase: objects that have no children become null. Simulate that in passing data around here.
// The null is for all the objects that have no children, so if distant descendant has no children, all ancestors don't exist.

export class ExampleData {

  // public createUserWith(topics: WantedTopics, supplyDemand?: boolean) { //TODO: get rid of boolean
  //   let user = new UserProfile();
  //   if(supplyDemand) {
  //     user.whatUserWants = this.createWhatUserWantsSupplyDemand(topics);
  //   }
  //   else {
  //     user.whatUserWants = this.createWhatUserWantsExchange(topics);
  //   }
  //   user.name = 'Some user name';
  //   user.suername = 'Some surname';
  //   user.company = 'Some company';
  //   user.role = 'Some user role';
  //   user.profileFacebook = 'Facebook profile url';
  //   user.profileGitHub = 'GitHub profile url';
  //   user.profileLinkedIn = 'LinkedIn profile url';
  //   user.profileStackOverflow = 'StackOverflow profile url';
  //   user.profileTwitter = 'Twitter profile url';
  //
  //   return user;
  // }

  public createWhatUserWants(topics: WantedTopics, supplyDemand?: boolean) { //TODO: get rid of boolean
   return this.createWhatUserWantsExchange(topics);
  }

  public readonly topics_Default = {
    topics: {
      pushId1: angular,
      pushId2: ionic,
      pushId3: android,
    }
  };

  public readonly topics_IonicAndroid = {
    topics: {
      pushId2: ionic,
      pushId3: android,
    }
  };

  public readonly topics_Ionic = {
    topics: {
      pushId2: ionic
    }
  };

  public readonly topics_Android = {
    topics: {
      pushId2: android
    }
  };

  public readonly topics_GraphicDesign = {
    topics: {
      pushId2: graphicDesign
    }
  };

  //User_3c_wantsToBeMentored_Android   //replace with a b
  //
  // public readonly User_4a_wantsFreelancingJob_GraphicDesing;
  //
  // public readonly User_4b_wantsToHireFreelancer_GraphicDesing;
  //
  // public readonly User_4c_wantsFreelancingJob_FullStack;
  //
  // public readonly User_5a_wantsAnInternship_Android;
  //
  // public readonly User_5b_wantsToHireAnIntern_Android;  //split into two
  //
  // public readonly User_6a_wantsAJob_FullStack;
  //
  // public readonly User_6b_wantsToHireForAJob_FullStack;
  //
  // public readonly User_6c_wantsToHireForAJob_GraphicDesign;

  private createWhatUserWantsSupplyDemand(topics: WantedTopics) {
    return   {
      byInteractionMode: {
        supplyDemand: {
          freelance: {
            supply: topics
          }
        }
      }
    }
  }

  private createWhatUserWantsExchange(topics: WantedTopics) {
    return   {
      byInteractionMode: {
        symmetric: {
          exchange: topics
        }
      }
    }
  }
}
