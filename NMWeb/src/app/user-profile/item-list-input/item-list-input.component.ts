import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import { TagEntry } from "app/user-profile/tag-entry";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {TopicInterest} from '../user-interests'
import {TopicsService} from '../../shared/topics.service'


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

  @Input() public inputTagList: TagEntry[]

  @Input() public formGroup1: FormGroup;


  @Output() public outputTagList = new EventEmitter<{tagList: TopicInterest[]}>();

  // rename: chosen Tag list
  public tagList: TopicInterest[] = [];

  stateCtrl: FormControl;
  filteredOptions: Observable<TagEntry[]>; // TODO: change from any
  currentFilteredOptions: TagEntry[] = [];

  constructor(
    public topicsService: TopicsService
  ) {
    this.inputTagList = this.topicsService.inputs;
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
      && ! this.tagExists(option)
    )
      : this.inputTagList;
  }

  tagExists(option: TagEntry) {
    return this.tagList.some((tag) => {
      return tag.tagEntry.name.toLowerCase() === option.name.toLowerCase()
    });
  }

  addTag(tagEntry: TagEntry) {
    // const tagEntry = this.inputTagList.find(el => el.name === tag)
    if(tagEntry) {
      if (this.tagExists(tagEntry)) {
        return;
      }
      const topicInterest = new TopicInterest(tagEntry);
      this.tagList.push(topicInterest);
      this.stateCtrl.reset();
      this.sendTagsToParent();
    }
  }

  deleteTag(tag: TopicInterest) {
    this.tagList = this.tagList.filter(t => t.tagEntry.name !== tag.tagEntry.name);
    this.sendTagsToParent();
  }

  /**
   * Send the tags entered by the user to the parent (user-profile component)
   */
  sendTagsToParent() {
    this.outputTagList.emit({tagList: this.tagList});
  }
}
