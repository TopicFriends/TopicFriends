import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {TopicListPickerComponent} from '../../../../topics/topics-edit-shared/topic-list-picker/topic-list-picker.component'
import {TagListModelEvent} from '../../../../topics/topics-core/TagListModel'
import {UserProfileInputs} from '../../UserProfileInputs'
import { WantedTopics } from '../../../user-profile-core/user-interests'
import { createTopicsDictionary } from '../../../user-profile-core/user-profile.service'
import {isUndefined} from 'util'

@Component({
  selector: 'app-topic-group-card',
  templateUrl: './topic-group-card.component.html',
  styleUrls: ['./topic-group-card.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TopicGroupCardComponent),
      multi: true,
    }
  ],
})
export class TopicGroupCardComponent implements OnInit, ControlValueAccessor {

  hidden = false;

  @Input() userProfileInputs: UserProfileInputs

  @ViewChild(TopicListPickerComponent) itemListInputComponent: TopicListPickerComponent

  propagateChange = (_: WantedTopics) => {}

  constructor() { }

  ngOnInit() {

  }

  /* override */ registerOnChange(fn) {
    this.propagateChange = fn
  }

  /* override */ writeValue(value: WantedTopics) {
    this.hidden = ((!value.topics || Object.keys(value.topics).length === 0) && !this.userProfileInputs.isEditable)
    this.itemListInputComponent.chosenTags = value.topics
    // this.value = value
  }

  /* override */ registerOnTouched(fn: any) {
    // no-op
  }

  onOutputTagListChanged(event: TagListModelEvent) {
    const wantedTopics: WantedTopics = {
      topics: createTopicsDictionary(event.tagList),
      // active: true
    }
    this.propagateChange(wantedTopics)
  }


}
