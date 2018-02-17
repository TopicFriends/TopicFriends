import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagEntry} from '../../user-profile/tag-entry'
import {TopicInterest} from '../../user-profile/user-interests'
import {RelatedTopicLists} from '../../user-matcher.service'
import {TagListModel} from '../TagListModel'

@Component({
  selector: 'app-topic-tag',
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss']
})
export class TopicTagComponent implements OnInit {

  @Input() tag: TopicInterest;
  @Input() editable: boolean;
  @Input() tagListModel: TagListModel
  @Input() relatedTopicLists: RelatedTopicLists;
  @Input() isCustomClick: boolean = false

  @Output() clickTopic = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
    // console.log('related tags', this.relatedTopicLists)
  }

  shouldHighlightSymmetric() {
    return (
      this.relatedTopicLists &&
      this.relatedTopicLists.symmetric &&
      this.relatedTopicLists.symmetric.tagExists(this.tag.tagEntry)
    )
  }

  shouldHighlightSupplyDemandSame() {
    return (
      this.relatedTopicLists &&
      this.relatedTopicLists.supplyDemandSame &&
      this.relatedTopicLists.supplyDemandSame.tagExists(this.tag.tagEntry)
    )
  }

  shouldHighlightSupplyDemandMatch() {
    return (
      this.relatedTopicLists &&
      this.relatedTopicLists.supplyDemandMatch &&
      this.relatedTopicLists.supplyDemandMatch.tagExists(this.tag.tagEntry)
    )
  }

}
