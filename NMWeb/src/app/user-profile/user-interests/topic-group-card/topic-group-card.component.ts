import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {WantedTopics} from '../../user-interests'
import {ItemListInputComponent} from '../../item-list-input/item-list-input.component'
import {TagListModelEvent} from '../../../shared/TagListModel'
import {createTopicsDictionary} from '../../user-profile.service'
import {UserProfileInputs} from '../../user-profile.component'

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

  @Input() userProfileInputs: UserProfileInputs

  @ViewChild(ItemListInputComponent) itemListInputComponent: ItemListInputComponent

  propagateChange = (_: WantedTopics) => {}

  constructor() { }

  ngOnInit() {
  }

  /* override */ registerOnChange(fn) {
    this.propagateChange = fn
  }

  /* override */ writeValue(value: WantedTopics) {
    this.itemListInputComponent.chosenTags = value.topics
    // this.value = value
  }

  /* override */ registerOnTouched(fn: any) {
    // no-op
  }

  onOutputTagListChanged(event: TagListModelEvent) {
    const wantedTopics: WantedTopics = {
      topics: createTopicsDictionary(event.tagList),
      active: true
    }
    this.propagateChange(wantedTopics)
  }


}
