import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../shared/topics.service'
import {TagInclusions} from '../shared/TagInclusions'
import {TopicInterest} from '../user-profile-shared/user-interests'
import {createTopicsDictionary} from '../user-profile-shared/user-profile.service'
import {TagEntry} from '../topics-shared/tag-entry'
import {Router} from '@angular/router'

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  // allRelatedTopics = {
  //   "results": [{
  //     "columns": ["user", "entity"],
  //     "data": [{
  //       "graph": {
  //         "nodes": [],
  //         "relationships": []
  //       }
  //     }]
  //   }],
  //   "errors": []
  // };

  allTopicsNodes = {};

  allTopicsArray: TagEntry[]
  allTopics: TagInclusions
  searchTagList = [];
  constructor(
    private topicsService: TopicsService,
    private router: Router
  ) {
    this.allTopicsArray = topicsService.topics
    this.allTopics = createTopicsDictionary(this.allTopicsArray.map(tagEntry => {
      // this.allRelatedTopics.results[0].data[0].graph.nodes.push({
      //   id: tagEntry.id,
      //   labels: [tagEntry.name],
      // });
      // if(tagEntry.related) {
      //   let relationships = this.allRelatedTopics.results[0].data[0].graph.relationships;
      //   for(let topic of tagEntry.related) {
      //     relationships.push({
      //       id: relationships.length,
      //       startNode: tagEntry.id,
      //       endNode: topic.id,
      //     });
      //   }
      // }
      // console.log(JSON.stringify(this.allRelatedTopics));

      let topicHTML = (tagEntry.logo)? "<img src=" + tagEntry.logo + ">":tagEntry.name;
      this.allTopicsNodes[tagEntry.id] = {
           id: tagEntry.id,
           html: topicHTML,
        };
      console.log(JSON.stringify(this.allTopicsNodes));
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
