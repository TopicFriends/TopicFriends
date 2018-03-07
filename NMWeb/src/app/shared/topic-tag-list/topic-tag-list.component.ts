import {Component, Input, OnInit} from '@angular/core';
import {TopicInterest, WantedTopics} from '../../user-profile/user-interests'
import {getDictionaryValuesAsArray} from '../utils'
import {TagEntry} from '../../user-profile/tag-entry'
import {TagListModel} from '../TagListModel'
import {TagInclusions} from 'app/shared/TagInclusions';
import {RelatedTopicLists} from '../../user-matcher.service'

@Component({
  selector: 'app-topic-tag-list',
  templateUrl: './topic-tag-list.component.html',
  styleUrls: ['./topic-tag-list.component.scss'],
})
export class TopicTagListComponent implements OnInit {

  @Input() tagListModel: TagListModel;
  _relatedTopicLists: RelatedTopicLists

  @Input() set tagList(tagList: TagInclusions) {
    // if ( tagList ) {
      this.tagListModel = new TagListModel(getDictionaryValuesAsArray(tagList))
    // }
  }

  get relatedTopicLists(): RelatedTopicLists {
    return this._relatedTopicLists
  }

  @Input() set relatedTopicLists(lists: RelatedTopicLists) {
    this._relatedTopicLists = lists
    // if ( tagList ) {
    //   this.tagListModel = new TagListModel(getDictionaryValuesAsArray(tagList))
    // }
  }
  @Input() editable: boolean;

  showLimit = 10;

  constructor() { }

  ngOnInit() {
  }

  trackByKey(index, val) {
    // console.log('trackByKey', val);
    // console.log('trackByKey val.$key', val.$key);
    // console.log('val.tagEntry.name', val.tagEntry.name);
    // return val.$key
    return val.tagEntry.name // hack because we don't have $key here yet
  }


  onShowMoreClick() {
   this.showLimit = this.tagListModel.tags.length;
  }
}
