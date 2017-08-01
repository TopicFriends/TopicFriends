import {Component, Input, OnInit} from '@angular/core';
import {TopicInterest, WantedTopics} from '../user-profile/user-interests'
import {getDictionaryValuesAsArray} from '../shared/utils'

@Component({
  selector: 'app-topic-tag-list',
  templateUrl: './topic-tag-list.component.html',
  styleUrls: ['./topic-tag-list.component.scss']
})
export class TopicTagListComponent implements OnInit {

  @Input() tags: WantedTopics;

  tagList: TopicInterest[]


  constructor() { }

  ngOnInit() {
    this.tagList = this.extractTags(this.tags.topics)
  }

  extractTags(dictionary: { [p: string]: TopicInterest }): TopicInterest[] {
    return getDictionaryValuesAsArray(dictionary);
  }

}
