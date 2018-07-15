import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {TagEntry} from '../../topics-shared/tag-entry'
import {TopicInterest} from '../../user-profile-shared/user-interests'
import {RelatedTopicLists} from '../../user-profile-shared/user-matcher.service'
import {TagListModel} from '../TagListModel'
import {TopicsService} from '../topics.service'

@Component({
  selector: 'app-topic-tag',
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss', './topic-tag.component-rounded-hexagon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicTagComponent implements OnInit {

  @Input() tag: TopicInterest;
  @Input() editable: boolean;
  @Input() tagListModel: TagListModel
  @Input() relatedTopicLists: RelatedTopicLists;
  @Input() isCustomClick: boolean = false

  @Output() clickTopic = new EventEmitter<any>()

  constructor(
    public topicsService: TopicsService,
  ) { }

  ngOnInit() {
    // console.log('related tags', this.relatedTopicLists)
    // console.log('TopicTagComponent: tag', this.tag)
    const topicById = this.topicsService.getTopicById(
      this.tag.tagEntry.id ||
      this.tag.tagEntry.name
    )
    if ( ! topicById ) {
      console.error('! topicById', this.tag)
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
