import {Component, Input, OnInit} from '@angular/core';
import {TagEntry} from '../../user-profile/tag-entry'
import {TopicInterest} from '../../user-profile/user-interests'

@Component({
  selector: 'app-topic-tag',
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss']
})
export class TopicTagComponent implements OnInit {

  @Input() tag: TopicInterest;
  @Input() editable: boolean;
  @Input() tagListModel;
  @Input() loggedUserSymmetricTagListModel;
  // @Input() loggedUserMatchingTagListModel;
  // @Input() loggedUserSameTagListModel;

  constructor() { }

  ngOnInit() {
  }

  shouldHighlightSymmetric() {
    return (
      this.loggedUserSymmetricTagListModel &&
      this.loggedUserSymmetricTagListModel.tagExists(this.tag.tagEntry)
    )
  }
}
