import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import { TagEntry } from "app/user-profile/tag-entry";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-item-list-input',
  templateUrl: './item-list-input.component.html',
  styleUrls: ['./item-list-input.component.scss'],
})
export class ItemListInputComponent implements OnInit
  // , ControlValueAccessor
{

  //options = ['Angular', 'Ionic', 'Firebase']

  reusableControl = new FormControl();

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
  @Input() public inputTagList: TagEntry[] = [new TagEntry('Angular'), new TagEntry('Ionic'), new TagEntry('Firebase')];

  @Output() public outputTagList = new EventEmitter();

  // Tag list 
  public tagList = [{name: "Angular", level: "beginner"}, {name: "Firebase"}];

  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.reusableControl.valueChanges
         .startWith(null)
         .map(val => val ? this.filter(val) : this.tagList['name'].slice());
  }

  filter(val: TagEntry): TagEntry[] {
      return this.tagList['name'].filter(option => new RegExp(`^${val}`, 'gi').test(option)); 
   }

  /**
   * Send the tags entered by the user to the parent (user-profile component)
   */
  sendTagsToParent() {
    this.outputTagList.emit({tagList: this.tagList});
  }

}
