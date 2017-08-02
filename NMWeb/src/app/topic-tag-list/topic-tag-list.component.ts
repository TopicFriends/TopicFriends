import {Component, Input, OnInit} from '@angular/core';
import {TagInclusions, TopicInterest, WantedTopics} from '../user-profile/user-interests'
import {getDictionaryValuesAsArray} from '../shared/utils'
import {TagEntry} from '../user-profile/tag-entry'
import {TagListModel} from '../shared/TagListModel'

@Component({
  selector: 'app-topic-tag-list',
  templateUrl: './topic-tag-list.component.html',
  styleUrls: ['./topic-tag-list.component.scss']
})
export class TopicTagListComponent implements OnInit {

  @Input() tagListModel: TagListModel;
  @Input() tagList: TagInclusions;
  @Input() editable: boolean;


  constructor() { }

  ngOnInit() {
    if ( this.tagList ) {
      this.tagListModel = new TagListModel(getDictionaryValuesAsArray(this.tagList))
    }
  }


}
