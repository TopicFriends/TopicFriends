import {
  Component,
  ContentChild,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { PickerListItemTagDirective } from './picker-list-item-tag.directive'
import { PickerListItemCandidateDirective } from './picker-list-item-candidate.directive'
import { TagEntry } from '../../topics/topics-shared/tag-entry'
import { TagInclusions } from '../../topics/topics-core/TagInclusions'
import { getDictionaryValuesAsArray } from '../../util/utils'
import { TagListModel } from '../../topics/topics-core/TagListModel'
import { FormControl } from '@angular/forms'
import {Subject} from 'rxjs/Subject'
import { TopicsService } from '../../topics/topics-core/topics.service'
import { UserTopicsService } from '../../topics/topics-core/user-topics.service'

declare var require: any
const Sifter = require("sifter")


@Component({
  selector: 'app-item-list-picker',
  templateUrl: './item-list-picker.component.html',
  styleUrls: ['./item-list-picker.component.sass']
})
export class ItemListPickerComponent implements OnInit, OnDestroy {

  allPickableItems = [
    { title: 'aaa' },
    { title: 'bbb' },
  ]

  pickedTags = this.allPickableItems

  /** https://alligator.io/angular/reusable-components-ngtemplateoutlet/ */
  @ContentChild(PickerListItemTagDirective, {read: TemplateRef}) itemTagTemplate

  @ContentChild(PickerListItemCandidateDirective, {read: TemplateRef}) itemCandidateTemplate



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
