import {Component, Input, OnInit} from '@angular/core';
import {TagInclusions, TopicInterest, WantedTopics} from '../user-profile/user-interests'
import {getDictionaryValuesAsArray} from '../shared/utils'

@Component({
  selector: 'app-topic-tag-list',
  templateUrl: './topic-tag-list.component.html',
  styleUrls: ['./topic-tag-list.component.scss']
})
export class TopicTagListComponent implements OnInit {

  @Input() tags: TopicInterest[];
  @Input() editable: boolean;


  constructor() { }

  ngOnInit() {
  }

}
