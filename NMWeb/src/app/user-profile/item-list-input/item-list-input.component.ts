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
  //@Input() public inputTagList: TagEntry[] = [new TagEntry('Angular'), new TagEntry('Ionic'), new TagEntry('Firebase')];
  /** I moved it here, because @Input stopped working for some reason and I am to distracted to troubleshoot it :-\ */
  @Input() public inputTagList: string[] = [
    'Angular', 'Ionic', 'Firebase',
    'Protractor', 'Karma', 'Jasmine',
    'PHP', 'Material Design', 'TypeScript', 'Django', 'Python', 'Ruby', 'Ruby On Rails',
    'PeopleMatcher',
    'Android', 'Kotlin', 'Java',
    'iOS', 'Swift',
    'D3',
  ];
  @Output() public outputTagList = new EventEmitter<{tagList: TopicInterest[]}>();

  // Tag list
  public tagList: TopicInterest[] = [];

  stateCtrl: FormControl;
  filteredOptions: any;

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredOptions = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filter(name));
  }

  ngOnInit() {
  }

  filter(val: string) {
    return val ? this.inputTagList.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.inputTagList;
  }

  addTag(tag: string) {
    this.tagList.push(
      {
        name: tag,
        logo: this.getLogoPath(tag)
      });
    this.stateCtrl.reset();
    this.sendTagsToParent();
  }

  getLogoPath(tag: string){
    // return '../../../assets/images/logos/' + tag.toLowerCase() + '-icon.svg'
    return '../../../assets/images/logos/' + tag.toLowerCase() + '.svg'
  }

  deleteTag(tag: TopicInterest) {
    this.tagList = this.tagList.filter(t => t.name !== tag.name);
    this.sendTagsToParent();
  }

  /**
   * Send the tags entered by the user to the parent (user-profile component)
   */
  sendTagsToParent() {
    this.outputTagList.emit({tagList: this.tagList});
  }

}
