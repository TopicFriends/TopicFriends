import { Component, Input, OnInit, Output,  EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TagEntry } from "app/user-profile/tag-entry";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {TopicInterest} from '../user-interests'
import {TopicsService} from '../../shared/topics.service'
import {TagListModel} from '../../shared/TagListModel'
import {TagInclusions} from '../../shared/TagInclusions'
import {getDictionaryValuesAsArray} from '../../shared/utils'
import {Subject} from 'rxjs/Subject'

declare var require: any
const Sifter = require("sifter")

@Component({
  selector: 'app-item-list-input',
  templateUrl: './item-list-input.component.html',
  styleUrls: ['./item-list-input.component.scss'],
})
export class ItemListInputComponent implements OnInit {

  sifter

  /** rename: all *possible* tags */
  @Input() public inputTagList: TagEntry[]

  @Input() public set chosenTags(val: TagInclusions) {
    const tagList = getDictionaryValuesAsArray(val);

    this.tagListModel.setChosenTags(tagList)
    this.reFilter()
  }


  // rename: chosen Tag list
  // public tagList: TopicInterest[] = this.exampleTags;
  // tagListModel: TagListModel = new TagListModel(this.exampleTags)
  tagListModel: TagListModel = new TagListModel([])
  @Output() public outputTagList = this.tagListModel.outputTagList
  // = new EventEmitter<{tagList: TopicInterest[]}>();

  stateCtrl: FormControl;
  // filteredOptions: Observable<TagEntry[]>;
  filteredOptions = new Subject<TagEntry[]>()
  lastFilteredOptions: TagEntry[]
  currentFilteredOptions: TagEntry[] = [];
  lastFilterText: string;

  lastAddedOption: TagEntry

  constructor(
    public topicsService: TopicsService
  ) {
    this.inputTagList = this.topicsService.topics;
    this.sifter = new Sifter(this.inputTagList)

    this.stateCtrl = new FormControl();
    this.stateCtrl.valueChanges
      // .startWith(null /* ensures initial filtering (all) - note that apparently md autocomplete
      //   does not show the auto-complete list initially anyway */ )
      .subscribe(textFilter => {
        if ( textFilter === this.lastFilterText ) {
          return; // prevent stack overflow
        }
        // if ( this.lastAddedOption && this.lastAddedOption.name === textFilter) {
        // autocomplete wants to set the text of the chosen option. We wanna prevent it
        if ( !textFilter ) {
          // autocomplete destroys value, we need to restore it
          this.stateCtrl.setValue(this.lastFilterText);
        }
        this.lastFilterText = textFilter
        this.reFilter()
    });
    this.reFilter() // force initial list
    // console.log('this.lastFilteredOptions.length', this.lastFilteredOptions.length)
  }

  private createFilteredOptions() {
    return this.filter(this.lastFilterText)
  }

  ngOnInit() {

    this.filteredOptions.subscribe((filteredOptions) => {
      this.currentFilteredOptions = filteredOptions;
    });
    this.outputTagList.subscribe(list => {
      this.reFilter()
    })
  }

  filter(filterString: string) {
    let sifterResults = this.sifter.search(filterString, {
      fields: ['name'],
      sort: [{field: 'name', direction: 'asc'}],
      limit: 50
    });
    // console.log('sifterr', sifterResults)
    let fullResults = []
    for ( let result of sifterResults.items ) {
      fullResults.push(this.inputTagList[result.id])
    }
    // console.log('full', fullResults)
    return fullResults

    // return this.inputTagList.filter(
    //   option => option.matchesTextFilter(filterString)
    //   && ! this.tagListModel.tagExists(option)
    // );
  }

  addTag(tagEntry: TagEntry) {
    this.lastAddedOption = tagEntry
    this.tagListModel.addTag(tagEntry);
    this.reFilter()
    if (this.lastFilteredOptions.length === 0) {
      this.stateCtrl.setValue('');
    }
    // I decided to not clear the input automatically
  }

  private reFilter() {
    this.lastFilteredOptions = this.createFilteredOptions()
    this.filteredOptions.next(this.lastFilteredOptions)
  }

}
