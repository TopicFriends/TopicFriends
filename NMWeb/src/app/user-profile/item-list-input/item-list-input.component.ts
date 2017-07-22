import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import { TagEntry } from "app/user-profile/tag-entry";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {TopicInterest} from '../user-profile.service'

@Component({
  selector: 'app-item-list-input',
  templateUrl: './item-list-input.component.html',
  styleUrls: ['./item-list-input.component.scss'],
})
export class ItemListInputComponent implements OnInit
  // , ControlValueAccessor
{

  //options = ['Angular', 'Ionic', 'Firebase']

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

  @Input() public formGroup1: FormGroup;

  // All possible tags
  // @Input() public inputTagList: TagEntry[] = [new TagEntry('Angular'), new TagEntry('Ionic'), new TagEntry('Firebase')];
  /** I moved it here, because @Input stopped working for some reason and I am to distracted to troubleshoot it :-\ */
  @Input() public inputTagList: TagEntry[] = this.transformTags([
    new TagEntry('Angular'), new TagEntry('Ionic'), new TagEntry('Firebase'),
    new TagEntry('Protractor'), new TagEntry('Karma'), new TagEntry('Jasmine'),
    new TagEntry('PHP'), new TagEntry('Material Design'), new TagEntry('TypeScript'),
    new TagEntry('Django'), new TagEntry('Python'), new TagEntry('Ruby'), new TagEntry('Ruby On Rails'),
    new TagEntry('PeopleMatcher'),
    new TagEntry('Android'), new TagEntry('Kotlin'), new TagEntry('Java'),
    new TagEntry('iOS'), new TagEntry('Swift'),
    new TagEntry('D3'),
    'Angular DI', 'Angular Modules', 'Angular Router', 'Webpack', 'VR',
    'JavaScript', 'ECMAScript',
  ]);

  private transformTags(inputList: (TagEntry|string)[]): TagEntry[] {
    return inputList.map(el => {
      if (el instanceof TagEntry) {
        return el;
      } else {
        return new TagEntry(el);
      }
    })
  }
  @Output() public outputTagList = new EventEmitter<{tagList: TopicInterest[]}>();

  // rename: chosen Tag list
  public tagList: TopicInterest[] = [];

  stateCtrl: FormControl;
  filteredOptions: Observable<TagEntry[]>; // TODO: change from any

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredOptions = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filter(name));
  }

  ngOnInit() {
  }

  filter(val: string) {
    return val ? this.inputTagList.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.inputTagList;
  }

  addTag(tagEntry: TagEntry) {
    // const tagEntry = this.inputTagList.find(el => el.name === tag)
    const topicInterest = new TopicInterest(tagEntry)
    this.tagList.push(topicInterest);
    this.stateCtrl.reset();
    this.sendTagsToParent();
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
