import { Component, OnInit } from '@angular/core';
import {SymmetricInteractions, TopicInterest, UserInterests} from '../user-interests'
import {Observable} from 'rxjs/Observable'
import {createTopicsDictionary, UserProfileService} from '../user-profile.service'
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-user-interests',
  templateUrl: './user-interests.component.html',
  styleUrls: ['./user-interests.component.scss']
})
export class UserInterestsComponent implements OnInit {

  whatUserWants = UserInterests.fromJson({});

  symmetricInteractions = new SymmetricInteractions();
  userInterestsObservable: Observable<UserInterests>;
  userInterests: UserInterests

  showSupplyDemand = false;

  constructor(
    protected userProfileService: UserProfileService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userInterestsObservable = this.userProfileService.getUserInterests();
      this.userInterestsObservable.subscribe((userInterests: UserInterests) => {
        this.userInterests = userInterests
      });
      // this.userId = user && user.uid;
      // this.myUserData = this.db.userDataById(this.userId);
    })
  }

  updateWantExchange(event: {tagList: TopicInterest[]}) {
    // console.log('updateWantExchange', event);
    console.log('updateWantExchange', event);
    console.log('updateWantExchange', this.whatUserWants);
    // this.whatUserWants.byInteractionMode.symmetric.exchange.topics = {};
    this.symmetricInteractions.exchange = {
      topics: createTopicsDictionary(event.tagList),
    };

  }

  updateWantHackathon(event: {tagList: TopicInterest[]}) {
    this.symmetricInteractions.hackathon = {
      topics: createTopicsDictionary(event.tagList),
    };
  }

  updateWantPairProgramming(event: {tagList: TopicInterest[]}) {
    this.symmetricInteractions.pairProgramming = {
      topics: createTopicsDictionary(event.tagList),
    };
  }


  getUserInterests() {
    return UserInterests.fromJson({
      byInteractionMode: {
        symmetric: this.symmetricInteractions,
      }
    })
  }
}
