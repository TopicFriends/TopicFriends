import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import { TagEntry } from "app/user-profile/tag-entry";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {TagInclusions, TopicInterest} from '../user-interests'
import {TopicsService} from '../../shared/topics.service'
import {TagListModel} from '../../shared/TagListModel'


@Component({
  selector: 'app-item-list-input',
  templateUrl: './item-list-input.component.html',
  styleUrls: ['./item-list-input.component.scss'],
})
export class ItemListInputComponent implements OnInit
  // , ControlValueAccessor
{
  //reusableControl = new FormControl();

  // writeValue(obj: any): void {
  //   throw new Error("Method not implemented.");
  // }
  //
  // registerOnChange(fn: any): void {
  //   throw new Error("Method not implemented.");
  // }
  //
  // registerOnTouched(fn: any): void {
  //   throw new Error("Method not implemented.");
  // }
  //
  // setDisabledState(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }

  exampleTags = [
    new TopicInterest(new TagEntry('Ionic')),
    new TopicInterest(new TagEntry('UAP', null)),
    new TopicInterest(new TagEntry('PeopleMatcher')),
    new TopicInterest(new TagEntry('Angular')),
    new TopicInterest(new TagEntry('Karma')),
    new TopicInterest(new TagEntry('Protractor')),
    new TopicInterest(new TagEntry('Ember')),
    new TopicInterest(new TagEntry('Elm')),
    new TopicInterest(new TagEntry('Firebase')),
  ]

  @Input() public inputTagList: TagEntry[]
  tagListModel: TagListModel

  @Input() public formGroup1: FormGroup;


  @Output() public outputTagList // = new EventEmitter<{tagList: TopicInterest[]}>();

  // rename: chosen Tag list
  public tagList: TopicInterest[] = this.exampleTags;

  stateCtrl: FormControl;
  filteredOptions: Observable<TagEntry[]>; // TODO: change from any
  currentFilteredOptions: TagEntry[] = [];

  constructor(
    public topicsService: TopicsService
  ) {
    this.inputTagList = this.topicsService.topics;
    this.tagListModel = new TagListModel(this.tagList)
    this.outputTagList = this.tagListModel.outputTagList
    this.stateCtrl = new FormControl();
    this.filteredOptions = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filter(name));
  }

  ngOnInit() {
    this.filteredOptions.subscribe((filteredOptions) => {
      this.currentFilteredOptions = filteredOptions;
    });
  }

  filter(val: string) {
    return val ? this.inputTagList.filter(
      option => option.matchesTextFilter(val)
      && ! this.tagListModel.tagExists(option)
    )
      : this.inputTagList;
  }

  addTag(tagEntry: TagEntry) {
    this.tagListModel.addTag(tagEntry);
    // I decided to not clear the input automatically
  }

}
