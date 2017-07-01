import {UserProfile, WantedTopics, WhatUserWants} from './user-profile.service';

const topic_Angular =
  {
    active: true,
    topicId: 'someForeignKey_Angular',
    name: 'Angular',
  };

const topic_Ionic =
  {
    active: true,
    topicId: 'someForeignKey_Ionic',
    name: 'Ionic',
  };

const topic_Android =
  {
    active: true,
    name: 'Android',
    topicId: 'someForeignKey_Android',
  };

// Firebase: objects that have no children become null. Simulate that in passing data around here.
// The null is for all the objects that have no children, so if distant descendant has no children, all ancestors don't exist.

export class ExampleData {

  public createUserWith(topics: WantedTopics, supplyDemand?: boolean) { //TODO: get rid of booleans
    var user = new UserProfile();
    if(supplyDemand) {
      user.whatUserWants = this.createWhatUserWantsSupplyDemand(topics);
    }
    else {
      user.whatUserWants = this.createWhatUserWantsExchange(topics);
    }
    user.name = 'Some user name';
    user.suername = 'Some surname';
    user.company = 'Some company';
    user.role = 'Some user role';
    user.profileFacebook = 'Facebook profile url';
    user.profileGitHub = 'GitHub profile url';
    user.profileLinkedIn = 'LinkedIn profile url';
    user.profileStackOverflow = 'StackOverflow profile url';
    user.profileTwitter = 'Twitter profile url';

    return user;
  }

  public readonly topics_Default = {
    topics: {
      pushId1: topic_Angular,
      pushId2: topic_Ionic,
      pushId3: topic_Android,
    }
  };

  public readonly topics_Empty = {
    topics: null
  };

  public readonly topics_Ionic = {    //User_3a_wantsToMentor_Ionic, User_3b_wantsToBeMentored_Ionic
    topics: {
      pushId2: topic_Ionic
    }
  };

  public readonly topics_Android = {
    topics: {
      pushId2: topic_Android
    }
  };  //User_3c_wantsToBeMentored_Android   //replace with a b

  public readonly User_4a_wantsFreelancingJob_GraphicDesing;

  public readonly User_4b_wantsToHireFreelancer_GraphicDesing;

  public readonly User_4c_wantsFreelancingJob_FullStack;

  public readonly User_5a_wantsAnInternship_Android;

  public readonly User_5b_wantsToHireAnIntern_Android;  //split into two

  public readonly User_6a_wantsAJob_FullStack;

  public readonly User_6b_wantsToHireForAJob_FullStack;

  public readonly User_6c_wantsToHireForAJob_GraphicDesign;

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
        exchange: topics
      }
    }
  }
}
