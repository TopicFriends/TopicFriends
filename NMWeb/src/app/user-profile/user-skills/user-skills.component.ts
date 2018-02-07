import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../../shared/topics.service'
import {TagEntry} from '../tag-entry'
import {TagInclusions} from '../../shared/TagInclusions'
import {createTopicsDictionary} from '../user-profile.service'
import {TopicInterest} from '../user-interests'

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss']
})
export class UserSkillsComponent implements OnInit {

  allTopicsArray: TagEntry[]
  allTopics: TagInclusions


  constructor(
    public topicsService: TopicsService,
  ) {
    this.allTopicsArray = topicsService.topics
    this.allTopics = createTopicsDictionary(this.allTopicsArray.map(tagEntry => {
      return new TopicInterest(tagEntry);
    }))
  }

  ngOnInit() {
  }

}
