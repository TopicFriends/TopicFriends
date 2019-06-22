import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../topics-core/topics.service'
import {TagInclusions} from '../topics-core/TagInclusions'
import {TopicInterest} from '../../user-profile/user-profile-core/user-interests'
import {createTopicsDictionary} from '../../user-profile/user-profile-core/user-profile.service'
import {TagEntry} from '../topics-shared/tag-entry'
import {Router} from '@angular/router'

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list-page.component.html',
  styleUrls: ['./topics-list-page.component.scss']
})
export class TopicsListPageComponent implements OnInit {

  allTopicsArray: TagEntry[]
  allTopics: TagInclusions
  searchTagList = [];
  constructor(
    private topicsService: TopicsService,
    private router: Router
  ) {
    this.allTopicsArray = topicsService.topics
    this.allTopics = createTopicsDictionary(this.allTopicsArray.map(tagEntry => {
      return new TopicInterest(tagEntry);
    }))
  }

  ngOnInit() {
  }

  getRoute() {
    if(this.searchTagList.length === 0 ) {
      return "#";
    }
    let url = '';
    for (let topic of this.searchTagList) {
      url = url + topic.tagEntry.id + ';';
    }
    //Remove last comma
    url = url.slice(0, url.length-1);
    return "/topics-map/" + url;
  }

  onOutputTagList(topics) {
    this.searchTagList = topics.tagList;
  }

}
