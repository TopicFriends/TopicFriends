import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {TOPIC_ID_PARAM} from '../shared/routes'
import {TagEntry} from '../topics-shared/tag-entry'
import {TopicsService} from '../shared/topics.service'
import {TopicInterest} from '../user-profile-shared/user-interests'
import {GitHubService} from '../shared/git-hub.service'
import {Title} from "@angular/platform-browser";
import { GeoLocationService } from '../shared/geo-location.service';
import {UserDataCombined} from '../user-profile-shared/user-profile.service';
import {UserMatched, UserMatcherService} from '../user-profile-shared/user-matcher.service';
import { UserListService } from '../user-list-page/user-list.service';
import { TagInclusions } from '../shared/TagInclusions';
import {TopicsDetailsService} from './topics-details.service'
import {DbList, DbListReadOnly} from '../shared/db.service'
import {
  GeoLocation,
  GeoLocationsDictionary,
} from '../user-profile-shared/user-geo-locations.types'

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  topicId: string = this.route.snapshot.params[TOPIC_ID_PARAM];
  topic: TagEntry
  topicInterest: TopicInterest
  interestedUsers: UserMatched[]
  showMin = 12;
  showLimit = 12;

  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService,
    private gitHubService: GitHubService,
    private titleService: Title,
    private topicsDetailsService: TopicsDetailsService
  ) {
    console.log('topicId', this.topicId)

    this.topic = this.topicsService.getTopicById(this.topicId)
    this.topicInterest = this.createTopicInterest(this.topic);
    this.topicId = this.topicInterest.tagEntry.id;
  }

  ngOnInit() {
    this.titleService.setTitle( this.topic.name + ' - TopicFriends');
    this.topicsDetailsService.getMatchedUsersWithTopicSortedBy(this.topicId, UserMatcherService.sortByMatchScore).subscribe((users) => {
      this.interestedUsers = users;
    });
  }

  createTopicInterest(topic) {
    return new TopicInterest(topic)
  }

  canShowMore() {
    return this.interestedUsers && this.interestedUsers.length > this.showLimit;
  }

  canShowLess() {
    return this.interestedUsers && (this.showLimit > this.showMin) && (this.showMin < this.interestedUsers.length);
  }

  onShowMoreClick() {
    this.showLimit = this.interestedUsers.length;
  }

  onShowLessClick() {
    this.showLimit = this.showMin;
  }
}
