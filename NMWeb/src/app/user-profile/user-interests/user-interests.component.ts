import {Component, OnInit, ViewChild} from '@angular/core';
import {SymmetricInteractions, TopicInterest, UserInterests} from '../user-interests'
import {Observable} from 'rxjs/Observable'
import {createTopicsDictionary, UserProfileService} from '../user-profile.service'
import {AuthService} from '../auth.service'
import {ItemListInputComponent} from '../item-list-input/item-list-input.component'

@Component({
  selector: 'app-user-interests',
  templateUrl: './user-interests.component.html',
  styleUrls: ['./user-interests.component.scss']
})
export class UserInterestsComponent implements OnInit {

  whatUserWants = UserInterests.fromJson({});

  @ViewChild('topicsExchangeComponent') topicsExchangeComponent: ItemListInputComponent;
  @ViewChild('topicsHackathonComponent') topicsHackathonComponent: ItemListInputComponent;
  @ViewChild('topicsPairProgrammingComponent') topicsPairProgrammingComponent: ItemListInputComponent;

  // symmetricInteractions = new SymmetricInteractions();
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
    // // console.log('updateWantExchange', event);
    // console.log('updateWantExchange', event);
    // console.log('updateWantExchange', this.whatUserWants);
    // // this.whatUserWants.byInteractionMode.symmetric.exchange.topics = {};
    // this.symmetricInteractions.exchange = {
    //   topics: createTopicsDictionary(event.tagList),
    // };

  }

  updateWantHackathon(event: {tagList: TopicInterest[]}) {
    // this.symmetricInteractions.hackathon = {
    //   topics: createTopicsDictionary(event.tagList),
    // };
  }

  updateWantPairProgramming(event: {tagList: TopicInterest[]}) {
    // this.symmetricInteractions.pairProgramming = {
    //   topics: createTopicsDictionary(event.tagList),
    // };
  }


  getUserInterests() {
    const symmetricInteractions = new SymmetricInteractions();
    symmetricInteractions.exchange = {
      topics: createTopicsDictionary(this.topicsExchangeComponent.tagListModel.tags),
    };
    symmetricInteractions.hackathon = {
      topics: createTopicsDictionary(this.topicsHackathonComponent.tagListModel.tags),
    };
    symmetricInteractions.pairProgramming = {
      topics: createTopicsDictionary(this.topicsPairProgrammingComponent.tagListModel.tags),
    };

    return UserInterests.fromJson({
      byInteractionMode: {
        symmetric: symmetricInteractions,
      }
    })
  }
}
