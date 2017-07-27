import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import { TagEntry } from "app/user-profile/tag-entry";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {TopicInterest} from '../user-interests'

function tag(name: string, logo?: string) {
  return new TagEntry(name, logo);
}

function tagLogoTipo(name: string, logo?: string) {
  return tag(name, logo); // pass visual hint later
}


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

  @Input() public formGroup1: FormGroup;

  // All possible tags
  // @Input() public inputTagList: TagEntry[] = [tag('Angular'), tag('Ionic'), tag('Firebase')];
  /** I moved it here, because @Input stopped working for some reason and I am to distracted to troubleshoot it :-\ */
  @Input() public inputTagList: TagEntry[] = this.transformTags([
    tag('Angular'), tag('Ionic'), tag('Firebase'),
    tag('Protractor'), tag('Karma'), tag('Jasmine'),
    tag('PHP'), tag('Material Design', null), tag('TypeScript'),
    tag('Django'), tag('Python'), tag('Ruby'), tag('Ruby On Rails'),
    tag('PeopleMatcher'),
    tag('Android'), tag('Kotlin'), 'KotlinJS', tag('Java'),
    tag('iOS'), tag('Swift'), 'Objective C',
    tag('D3'),
    tag('Angular DI', null), tag('Angular Modules', null), tag('Angular Router', null), 'Webpack',
    tag('VR', null),
    'JavaScript', tag('ECMAScript', 'es6'),
    'Elm', 'Scala', tag('.NET', 'dotnet'), '.NET Core', 'Docker', 'ElasticSearch',
    tagLogoTipo('Ember'), 'React', 'Git', 'TensorFlow', 'JHipster', tagLogoTipo('Meteor'), tagLogoTipo('Hoodie'),
    'Laravel',
  ]);


  private transformTags(inputList: (TagEntry|string)[]): TagEntry[] {
    return inputList.map(el => {
      if (el instanceof TagEntry) {
        return el;
      } else {
        return tag(el);
      }
    })
  }
  @Output() public outputTagList = new EventEmitter<{tagList: TopicInterest[]}>();

  // rename: chosen Tag list
  public tagList: TopicInterest[] = [];

  stateCtrl: FormControl;
  filteredOptions: Observable<TagEntry[]>; // TODO: change from any
  currentFilteredOptions: TagEntry[] = [];

  constructor() {
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
