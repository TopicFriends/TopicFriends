import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
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
import { logDebug } from '../../../../e2e-testcafe/testSrc/utilsGlobal/log'

declare var require: any
const Sifter = require("sifter")

// TODO: check https://stackblitz.com/angular/yoyokearnlq?file=app%2Fchips-autocomplete-example.ts again (stuff with Moi?)


/*
TODO: extract app-topic-tag-body from app-topic-tag
TODO: tags here, when clicked, should not navigate to topic details page
TODO: prevent filter text from being erased
*/

@Component({
  selector: 'app-item-list-picker',
  templateUrl: './item-list-picker.component.html',
  styleUrls: ['./item-list-picker.component.sass']
})
export class ItemListPickerComponent implements OnInit, OnDestroy {

  // allPickableItems = [
  //   { title: 'aaa' },
  //   { title: 'bbb' },
  // ]

  // pickedTags = this.allPickableItems
  pickedTags = []

  /** https://alligator.io/angular/reusable-components-ngtemplateoutlet/ */
  @ContentChild(PickerListItemTagDirective, {read: TemplateRef}) itemTagTemplate

  @ContentChild(PickerListItemCandidateDirective, {read: TemplateRef}) itemCandidateTemplate



  enableAddingTopics = false

  sifter

  /** rename: all *possible* tags */
  public _inputTagList: TagEntry[]

  @ViewChild('filterInput') filterInput: ElementRef

  @Input() set inputTagList(l: TagEntry[]) {
    this._inputTagList = l
    console.log('set inputTagList this._inputTagList', this._inputTagList.length/*filter(_ => !_.id)*/)
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
  lastFilteredCandidates: TagEntry[]
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
        .takeUntil(this.unsubscribe).subscribe(newTextFilter =>
    {
      if ( newTextFilter === this.lastFilterText ) {
        return; // prevent stack overflow
      }
      // if ( this.lastAddedOption && this.lastAddedOption.name === textFilter) {
      // autocomplete wants to set the text of the chosen option (well actually TagEntry, turns out in 2019). We wanna prevent it
      if ( !newTextFilter || typeof newTextFilter !== 'string' || newTextFilter === '' ) {
        console.log('autocomplete destroys value, we need to restore it')
        setTimeout(() => {
          this.stateCtrl.setValue(this.lastFilterText);
        })
      }
      if ( typeof newTextFilter === 'string' && newTextFilter !== ''
          /* Check because sometimes we get TagEntry object instead of string, which breaks sifter query/options */
      ) {
        this.lastFilterText = newTextFilter
        console.log('set this.lastFilterText: ', this.lastFilterText)
        this.reFilter()
      }
    });
    // console.log('this.lastFilteredOptions.length', this.lastFilteredOptions.length)
  }

  private createSifter() {
    this.sifter = new Sifter(this.inputTagList)
  }

  private createFilteredCandidates() {
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
    console.log('sifter.search(filterString', filterString)
    let sifterResults = this.sifter.search(filterString, {
      fields: ['name'],
      sort: [{field: 'name', direction: 'asc'}],
      limit: 50,
      // score: () => 0 /* Hack to fix `Cannot read property 'score' of undefined` */,
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
    logDebug('addTag', tagEntry)
    this.lastAddedOption = tagEntry
    this.tagListModel.addTag(tagEntry);
    this.reFilter()
    // if (this.lastFilteredOptions.length === 0) {
      this.stateCtrl.setValue('');
      this.filterInput.nativeElement.value = '';

    // }
    // I decided to not clear the input automatically
  }

  private reFilter() {
    this.lastFilteredCandidates = this.createFilteredCandidates()
    this.filteredOptions.next(this.lastFilteredCandidates)
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

  onAutocompleteCandidateSelected($event) {
    console.log('onAutocompleteCandidateSelected', $event)
  }

}
