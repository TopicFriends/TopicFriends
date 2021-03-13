import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TopicInterest } from '../../../user-profile/user-profile-core/user-interests'
import { getDictionaryValuesAsArray } from '../../../util/utils'
import { TagListModel } from '../../topics-core/TagListModel'
import { TagInclusions } from 'app/topics/topics-core/TagInclusions';
import { RelatedTopicLists } from '../../../user-profile/user-profile-core/user-matcher.service'
import { changeDetectionForUserProfileListSpeedup } from '../topic-tag/topic-tag.component'

@Component({
  selector: 'app-topic-tag-list',
  templateUrl: './topic-tag-list.component.html',
  styleUrls: ['./topic-tag-list.component.scss'],
  changeDetection: changeDetectionForUserProfileListSpeedup,
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
    //Sort tags
    this.tagListModel.tags = this.tagListModel.tags.sort(this.sortFuncTags.bind(this));

    // if ( tagList ) {
    //   this.tagListModel = new TagListModel(getDictionaryValuesAsArray(tagList))
    // }
  }
  @Input() editable: boolean;
  @Input() minShow;

  @Input() margin = "0";
  @Input() width = "100%";

  showLimit;

  constructor() { }

  ngOnInit() {
    if(!this.minShow) {
      this.minShow = 10;
    }
    this.showLimit = this.minShow;
  }

  trackByKey(index, val) {
    // console.log('trackByKey', val);
    // console.log('trackByKey val.$key', val.$key);
    // console.log('val.tagEntry.name', val.tagEntry.name);
    // return val.$key
    return val.tagEntry.name // hack because we don't have $key here yet
  }


  canShowMore() {
    return this.tagListModel.tags.length > this.showLimit;
  }

  canShowLess() {
    return (this.showLimit > this.minShow) && (this.minShow < this.tagListModel.tags.length);
  }

  onShowMoreClick() {
    this.showLimit = this.tagListModel.tags.length;
  }

  onShowLessClick() {
    this.showLimit = this.minShow;
  }

  sortFuncTags(a: TopicInterest, b: TopicInterest) {
    let ans = 0;

    if(this.currentUserHasInterest(a)){
      ans--;
    }
    if(this.currentUserHasInterest(b)) {
      ans++;
    }
    return ans;
  }

  currentUserHasInterest(interest: TopicInterest) {
    return (
      this.relatedTopicLists.symmetric.tagExists(interest.tagEntry)  ||
      this.relatedTopicLists.supplyDemandMatch.tagExists(interest.tagEntry) ||
      this.relatedTopicLists.supplyDemandSame.tagExists(interest.tagEntry)
    )
  }
}
