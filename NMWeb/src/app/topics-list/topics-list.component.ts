import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../shared/topics.service'
import {TagInclusions} from '../shared/TagInclusions'
import {TopicInterest} from '../user-profile/user-interests'
import {createTopicsDictionary} from '../user-profile/user-profile.service'
import {TagEntry} from '../user-profile/tag-entry'
import {Router} from '@angular/router'

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

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
    if(this.searchTagList == 0 ) {
      return "#";
    }
    let url = '';
    for (let topic of this.searchTagList) {
      url = url + topic.tagEntry.id + ',';
    }
    //Remove last comma
    url = url.slice(0, url.length-1);
    return "/topics-map/" + url;
  }

  onOutputTagList(topics) {
    this.searchTagList = topics.tagList;
  }

}
