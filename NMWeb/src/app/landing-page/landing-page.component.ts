import { Component, OnInit } from '@angular/core';
import { TopicInterest } from '../user-profile-shared/user-interests'
import { TopicsService } from '../shared/topics.service'
import { TagEntry } from '../topics-shared/tag-entry'
import { TagInclusions } from '../shared/TagInclusions'
import { Router } from '@angular/router'
import { createTopicsDictionary } from '../user-profile-shared/user-profile.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

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
