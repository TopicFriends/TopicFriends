import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {TOPIC_ID_PARAM} from '../topics.module'
import {TagEntry} from '../../user-profile/tag-entry'
import {TopicsService} from '../../shared/topics.service'
import {TopicInterest} from '../../user-profile/user-interests'
import {GitHubService} from '../../shared/git-hub.service'

TESTING_ERROR

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  topicId: string = this.route.snapshot.params[TOPIC_ID_PARAM];

  topic: TagEntry
  topicInterest: TopicInterest

  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService,
    private gitHubService: GitHubService,
  ) {
    this.topic = this.topicsService.getTopicById(this.topicId)
    this.topicInterest = this.createTopicInterest(this.topic);
  }

  ngOnInit() {
  }

  createTopicInterest(topic) {
    return new TopicInterest(topic)
  }

}
