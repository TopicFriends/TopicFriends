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
    // Mentor
    userProfile.whatUserWants.mentor.demand.topics = "Business Model";
    userProfile.whatUserWants.mentor.demand.action = "find mentor";
    userProfile.whatUserWants.mentor.supply.topics = "Business Strategy";
    userProfile.whatUserWants.mentor.supply.action = "be mentor";

    // Freelance
    userProfile.whatUserWants.freelance.demand.topics = "iOS Senior developer";
    userProfile.whatUserWants.freelance.demand.action = "hire freelancer";
    userProfile.whatUserWants.freelance.supply.topics = "Android developer";
    userProfile.whatUserWants.freelance.supply.action = "be hired as freelancer";

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
