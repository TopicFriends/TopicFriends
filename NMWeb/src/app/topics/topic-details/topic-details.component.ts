import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {TOPIC_ID_PARAM} from '../topics.module'
import {TagEntry} from '../../user-profile/tag-entry'
import {TopicsService} from '../../shared/topics.service'
import {TopicInterest} from '../../user-profile/user-interests'
import {GitHubService} from '../../shared/git-hub.service'
import {Title} from "@angular/platform-browser";
import { GeoLocationService } from '../../shared/geo-location.service';
import {GeoLocation, GeoLocationsDictionary, UserDataCombined} from '../../user-profile/user-profile.service';
import {UserMatched, UserMatcherService} from '../../user-matcher.service';
import { UserListService } from '../../user-list/user-list.service';
import { TagInclusions } from '../../shared/TagInclusions';
import {TopicsDetailsService} from '../topics-details.service'
import {DbList, DbListReadOnly} from '../../db.service'

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  topicId: string = this.route.snapshot.params[TOPIC_ID_PARAM];
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  topic: TagEntry
  topicInterest: TopicInterest
  userCoordinates: GeoLocationsDictionary[];

  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService,
    private gitHubService: GitHubService,
    private titleService: Title,
    private geoLocationService: GeoLocationService,
    private topicDetailsService: TopicsDetailsService
  ) {
    this.topic = this.topicsService.getTopicById(this.topicId)
    this.topicInterest = this.createTopicInterest(this.topic);
    this.topicId = this.topicInterest.tagEntry.id;
  }

  ngOnInit() {
    this.titleService.setTitle( this.topic.name + ' - TopicFriends');
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        // this.coordinates = {
        //   latitude:  +(pos.coords.latitude.toFixed(5)),
        //   longitude: +(pos.coords.longitude.toFixed(5))
        // };
      }
    );

    let usersWithTopic: DbListReadOnly<UserDataCombined> = this.topicDetailsService.getUsersWithTopic(this.topicId)
    usersWithTopic.subscribe(userList => {

    })

    let matchedUsersWithTopic: DbListReadOnly<UserMatched> = this.topicDetailsService.getMatchedUsersWithTopic(this.topicId)
    matchedUsersWithTopic.subscribe(userMatchedList => {
      console.log(userMatchedList)
    })
  }

  createTopicInterest(topic) {
    return new TopicInterest(topic)
  }

}
