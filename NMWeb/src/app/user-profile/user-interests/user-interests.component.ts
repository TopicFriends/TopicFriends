import { Component, OnInit } from '@angular/core';
import {SymmetricInteractions, TopicInterest, UserInterests} from '../user-interests'
import {Observable} from 'rxjs/Observable'
import {UserProfileService} from '../user-profile.service'
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

  showSupplyDemand = false;

  options = [
    'Angular', 'Ionic', 'Firebase',
    // 'Protractor', 'Karma', 'Jasmin',
    // 'PHP', 'Material Design', 'TypeScript', 'Django', 'Python', 'Ruby', 'Ruby On Rails',
    // 'PeopleMatcher',
    // 'Android', 'Kotlin', 'Java'
  ];

  constructor(
    protected userProfileService: UserProfileService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log('authService.user.subscribe user', user);
      this.userInterestsObservable = this.userProfileService.getUserInterests();
      this.userInterestsObservable.subscribe((userInterests: UserInterests) => {

      });
      // this.userId = user && user.uid;
      // this.myUserData = this.db.userDataById(this.userId);
    })
  }

  getOptionsNames(){
    return this.options;
  }

  updateWantExchange(event: {tagList: TopicInterest[]}) {
    // console.log('updateWantExchange', event);
    console.log('updateWantExchange', event);
    console.log('updateWantExchange', this.whatUserWants);
    // this.whatUserWants.byInteractionMode.symmetric.exchange.topics = {};
    this.symmetricInteractions.exchange = {
      topics: this.createTopicsDictionary(event.tagList),
    };

  }

  updateWantHackathon(event: {tagList: TopicInterest[]}) {
    this.symmetricInteractions.hackathon = {
      topics: this.createTopicsDictionary(event.tagList),
    };
  }

  updateWantPairProgramming(event: {tagList: TopicInterest[]}) {
    this.symmetricInteractions.pairProgramming = {
      topics: this.createTopicsDictionary(event.tagList),
    };
  }

  private createTopicsDictionary(topics: TopicInterest[]) {
    let ret = {};
    let i = 0;
    for ( const topic of topics ) {
      ret[i] = topic;
      i++;
    }
    return ret;
  }

}
