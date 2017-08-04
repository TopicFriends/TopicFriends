import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserDataFetched, UserProfile} from 'app/user-profile/user-profile.service';
import {Observable} from 'rxjs/Observable'
import {DomainDbService} from '../domain-db.service'

@Injectable()
export class UserListService {

  userList = [];

  constructor(
    private domainDbService: DomainDbService,
  ) {
    //this.userList = db.list('UserProfile');
  }

  public getUserList() {
    return this.userList;
  }

  public getDefaultUserList(){
    let userProfile = new UserProfile();
    userProfile.displayName = "Rubén Triviño Juárez";
    userProfile.company = "Willimbu";
    userProfile.role = "Developer";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.intern.demand.topics.topicInclusionId.name = "Angular Junior";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.intern.supply.topics.topicInclusionId.name = "DJango";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.mentor.demand.topics.topicInclusionId.name = "Business Model";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.mentor.supply.topics.topicInclusionId.name = "Business Strategy";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.freelance.demand.topics.topicInclusionId.name = "iOS Senior developer";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.freelance.supply.topics.topicInclusionId.name = "Android developer";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.job.demand.topics.topicInclusionId.name = "UX/UI Expert";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.job.supply.topics.topicInclusionId.name = "Angular Junior";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.sponsorEvents.demand.topics.topicInclusionId.name = "Comunity Manager";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.sponsorEvents.supply.topics.topicInclusionId.name = "Gamer events";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.coFounderSpecializingIn.demand.topics.topicInclusionId.name = "Project idea";
    // userProfile.whatUserWants.byInteractionMode.supplyDemand.coFounderSpecializingIn.supply.topics.topicInclusionId.name = "Wanna join";
    this.userList.push(userProfile);
    this.userList.push(userProfile);
    this.userList.push(userProfile);
    this.userList.push(userProfile);
    this.userList.push(userProfile);
    this.userList.push(userProfile);
    this.userList.push(userProfile);
    this.userList.push(userProfile);

    return this.userList;
  }

  // public getFilteredUsersList(minimumMatchScore: number): Observable<UserDataFetched[]> {
  //
  // }

  public listUserDataWithDetails(): Observable<UserDataFetched[]> {
    return this.domainDbService.listUserDataWithDetails();
  }

}
