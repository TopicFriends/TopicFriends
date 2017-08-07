import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../shared/topics.service'
import {TagInclusions} from '../shared/TagInclusions'
import {TopicInterest} from '../user-profile/user-interests'
import {createTopicsDictionary} from '../user-profile/user-profile.service'
import {TagEntry} from '../user-profile/tag-entry'

@Component({
  selector: 'app-topics-all',
  templateUrl: './topics-all.component.html',
  styleUrls: ['./topics-all.component.scss']
})
export class TopicsAllComponent implements OnInit {

  allTopicsArray: TagEntry[]
  allTopics: TagInclusions

  constructor(
    topicsService: TopicsService
  ) {
    this.allTopicsArray = topicsService.topics
    this.allTopics = createTopicsDictionary(this.allTopicsArray.map(tagEntry => {
      return new TopicInterest(tagEntry);
    }))
  }

  ngOnInit() {
  }

}
