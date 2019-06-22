import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TopicInterest } from '../../../user-profile/user-profile-core/user-interests'
import { RelatedTopicLists } from '../../../user-profile/user-profile-core/user-matcher.service'
import { TagListModel } from '../../topics-core/TagListModel'
import { TopicsService } from '../../topics-core/topics.service'

/** for analysing/optimising speed of users list / topic tags */
// const changeDetectionForUserProfileListSpeedup = ChangeDetectionStrategy.OnPush
export const changeDetectionForUserProfileListSpeedup = ChangeDetectionStrategy.Default

@Component({
  selector: 'app-topic-tag',
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss'],
  changeDetection: changeDetectionForUserProfileListSpeedup,
})
export class TopicTagComponent implements OnInit {

  @Input() tag: TopicInterest;
  @Input() editable: boolean;
  @Input() tagListModel: TagListModel
  @Input() relatedTopicLists: RelatedTopicLists;
  @Input() isCustomClick: boolean = false

  @Output() clickTopic = new EventEmitter<any>()

  show = {
    matChip: false,
    chipContent: true,
    simplified: false,
  }

  constructor(
    public topicsService: TopicsService,
  ) { }

  ngOnInit() {
    // console.log('related tags', this.relatedTopicLists)
    // console.log('TopicTagComponent: tag', this.tag)
    const topicById = this.topicsService.getTopicById2(
      this.tag.tagEntry.id ||
      this.tag.tagEntry.name
    )
    if ( ! topicById ) {
      console.error('! topicById', this.tag, this.tag.tagEntry)
    }
    this.tag.tagEntry = topicById
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
