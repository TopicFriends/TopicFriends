import {Component, Input, OnInit} from '@angular/core';
import {TopicInterest, WantedTopics} from '../../user-profile/user-interests'
import {getDictionaryValuesAsArray} from '../utils'
import {TagEntry} from '../../user-profile/tag-entry'
import {TagListModel} from '../TagListModel'
import {TagInclusions} from 'app/shared/TagInclusions';

@Component({
  selector: 'app-topic-tag-list',
  templateUrl: './topic-tag-list.component.html',
  styleUrls: ['./topic-tag-list.component.scss'],
})
export class TopicTagListComponent implements OnInit {

  @Input() tagListModel: TagListModel;
  @Input() set tagList(tagList: TagInclusions) {
    console.log('set tagList', tagList)
    // if ( tagList ) {
      this.tagListModel = new TagListModel(getDictionaryValuesAsArray(tagList))
    // }
  }
  @Input() editable: boolean;


  constructor() { }

  ngOnInit() {
  }

  trackByKey(val) {
    console.log('trackByKey', val);
    console.log('trackByKey val.$key', val.$key);
    return val.$key
  }


}
