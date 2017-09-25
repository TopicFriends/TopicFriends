import {Component, Input, OnInit} from '@angular/core';
import {WantedTopics} from '../../../user-profile/user-interests'

@Component({
  selector: 'app-user-interests-mode-view',
  templateUrl: './user-interests-mode-view.component.html',
  styleUrls: ['./user-interests-mode-view.component.scss']
})
export class UserInterestsModeViewComponent implements OnInit {

  @Input() topicGroup: WantedTopics;

  @Input() loggedUserTopicGroupSymmetric: WantedTopics;

  @Input() loggedUserTopicGroupSupplyDemandSame: WantedTopics;
  @Input() loggedUserTopicGroupSupplyDemandMatching: WantedTopics;

  constructor() { }

  ngOnInit() {
  }

}
