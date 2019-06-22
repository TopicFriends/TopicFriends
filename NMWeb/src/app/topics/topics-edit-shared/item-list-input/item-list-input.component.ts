import {Component, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TagEntry } from "app/topics/topics-shared/tag-entry";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject'

import "rxjs/add/operator/takeUntil";
import { TagInclusions } from '../../topics-core/TagInclusions'
import { TagListModel } from '../../topics-core/TagListModel'
import { TopicsService } from '../../topics-core/topics.service'
import { UserTopicsService } from '../../topics-core/user-topics.service'
import { getDictionaryValuesAsArray } from '../../../util/utils'

declare var require: any
const Sifter = require("sifter")

/** FIXME: rename to smth like TopicListPicker */
@Component({
  selector: 'app-item-list-input',
  templateUrl: './item-list-input.component.html',
  styleUrls: ['./item-list-input.component.scss'],
})
export class ItemListInputComponent implements OnInit, OnDestroy {

  enableAddingTopics = false

  sifter

  /** rename: all *possible* tags */
  public _inputTagList: TagEntry[]

  @Input() set inputTagList(l: TagEntry[]) {
    this._inputTagList = l
    this.createSifter()
    this.reFilter()
  }

  get inputTagList(): TagEntry[] {
    return this._inputTagList
  }

  @Input() public isEditable: boolean

  @Input() public set chosenTags(val: TagInclusions) {
    const tagList = getDictionaryValuesAsArray(val);

    this.tagListModel.setChosenTags(tagList)
    this.reFilter()
  }

  @Input() width = "100%";
  @Input() margin = "0";
  @Input() displayMode ="flex"
  @Input() placeholder;

  tagListModel: TagListModel = new TagListModel([])
  @Output() public outputTagList = this.tagListModel.outputTagList

  stateCtrl: FormControl;
  filteredOptions = new Subject<TagEntry[]>()
  lastFilteredOptions: TagEntry[]
  currentFilteredOptions: TagEntry[] = [];
  lastFilterText: string;
  lastAddedOption: TagEntry

  private unsubscribe = new Subject<void>();


  constructor(
    public topicsService: TopicsService,
    private userTopicsService: UserTopicsService,
  ) {
    this.inputTagList = this.topicsService.topics;
    this.userTopicsService.observeUserTopics().takeUntil(this.unsubscribe).subscribe(topics => {
      this.inputTagList = this.topicsService.topics.concat(topics)
    })

    this.stateCtrl = new FormControl();
    this.stateCtrl.valueChanges
      // .startWith(null /* ensures initial filtering (all) - note that apparently md autocomplete
      //   does not show the auto-complete list initially anyway */ )
      .takeUntil(this.unsubscribe).subscribe(textFilter => {
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
    // console.log('this.lastFilteredOptions.length', this.lastFilteredOptions.length)
  }

  private createSifter() {
    this.sifter = new Sifter(this.inputTagList)
  }

  private createFilteredOptions() {
    return this.filter(this.lastFilterText)
  }

  ngOnInit() {

    this.filteredOptions.takeUntil(this.unsubscribe).subscribe((filteredOptions) => {
      this.currentFilteredOptions = filteredOptions;
    });
    this.outputTagList.takeUntil(this.unsubscribe).subscribe(list => {
      this.reFilter()
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
      let resultById = this.inputTagList[result.id]
      if ( ! this.tagListModel.tagExists(resultById) ) {
        fullResults.push(resultById)
      } // else prevent duplicate
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

  createTopic() {
    this.openCreateTopicDialog(this.lastFilterText.trim());
    this.userTopicsService.addTopic(this.lastFilterText.trim())
    // TODO: confirmation dialog
    // TODO: trim
    // TODO:
  }

  private openCreateTopicDialog(topicName: string) {

  }

  onEnterKey(event) {
    console.log('ItemListInput onEnterKey', event)
    event.preventDefault()

  }

  onAutocompleteOptionSelected($event) {
    console.log('onAutocompleteOptionSelected', $event)
  }
}
