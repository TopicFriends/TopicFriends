import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SymmetricInteractions, TopicInterest, UserInterests} from '../user-interests'
import {Observable} from 'rxjs/Observable'
import {createTopicsDictionary, UserProfileService} from '../user-profile.service'
import {AuthService} from '../auth.service'
import {ItemListInputComponent} from '../item-list-input/item-list-input.component'
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-user-interests',
  templateUrl: './user-interests.component.html',
  styleUrls: ['./user-interests.component.scss']
})
export class UserInterestsComponent implements OnInit {

  whatUserWants = UserInterests.fromJson({});

  @Input() parentFormGroup: FormGroup
  @Input() formGroup: FormGroup

  @ViewChild('topicsExchangeComponent') topicsExchangeComponent: ItemListInputComponent;
  @ViewChild('topicsHackathonComponent') topicsHackathonComponent: ItemListInputComponent;
  @ViewChild('topicsPairProgrammingComponent') topicsPairProgrammingComponent: ItemListInputComponent;

  // symmetricInteractions = new SymmetricInteractions();
  userInterestsObservable: Observable<UserInterests>;
  userInterests: UserInterests


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
        this.formGroup.patchValue(userInterests) // FIXME: use setValue with filled-in missing values
        // this.formGroup.setValue(userInterests)
      });
      // this.userId = user && user.uid;
      // this.myUserData = this.db.userDataById(this.userId);
    })
  }

  getUserInterests(): UserInterests {
    return this.formGroup.value
    // const symmetricInteractions = new SymmetricInteractions();
    // symmetricInteractions.exchange = {
    //   topics: createTopicsDictionary(this.topicsExchangeComponent.tagListModel.tags),
    // };
    // symmetricInteractions.hackathon = {
    //   topics: createTopicsDictionary(this.topicsHackathonComponent.tagListModel.tags),
    // };
    // symmetricInteractions.pairProgramming = {
    //   topics: createTopicsDictionary(this.topicsPairProgrammingComponent.tagListModel.tags),
    // };
    //
    // return UserInterests.fromJson({
    //   byInteractionMode: {
    //     symmetric: symmetricInteractions,
    //   }
    // })
  }

  static buildFormGroup(formBuilder: FormBuilder) {
    // userInterests?.byInteractionMode?.symmetric?.exchange?.topics
    return formBuilder.group({
      byInteractionMode: formBuilder.group({
        symmetric: formBuilder.group({
          exchange: {},
          pairProgramming: {},
          hackathon: {},
        }),
        supplyDemand: formBuilder.group({
          intern: { /* supply, demand */ /* topics - within custom form control */},
          mentor: { },
          freelance: { }
        })
      })
    })
  }
}
