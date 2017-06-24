import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { UserProfile } from "app/user-profile/user-profile.service";

@Injectable()
export class UserListService {

  userList = [];

  constructor(
    private db: AngularFireDatabase,
  ) {
    //this.userList = db.list('UserProfile');
  }

  public getUserList() {
    return this.userList;
  }

  public getDefaultUserList(){
    let userProfile = new UserProfile();
    userProfile.name = "Rubén Triviño Juárez";
    userProfile.company = "Willimbu";
    userProfile.role = "Developer";
    userProfile.whatUserWants.intern.demand.topics = "Angular Junior";
    userProfile.whatUserWants.intern.supply.topics = "DJango";
    userProfile.whatUserWants.mentor.demand.topics = "Business Model";
    userProfile.whatUserWants.mentor.supply.topics = "Business Strategy";
    userProfile.whatUserWants.freelance.demand.topics = "iOS Senior developer";
    userProfile.whatUserWants.freelance.supply.topics = "Android developer";
    userProfile.whatUserWants.job.demand.topics = "UX/UI Expert";
    userProfile.whatUserWants.job.supply.topics = "Angular Junior";
    userProfile.whatUserWants.sponsorEvents.demand.topics = "Comunity Manager";
    userProfile.whatUserWants.sponsorEvents.supply.topics = "Gamer events";
    userProfile.whatUserWants.coFounderSpecializingIn.demand.topics = "Project idea";
    userProfile.whatUserWants.coFounderSpecializingIn.supply.topics = "Wanna join";
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

}
