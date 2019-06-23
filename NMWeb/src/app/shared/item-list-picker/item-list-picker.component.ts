import {
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { PickerListItemTagDirective } from './picker-list-item-tag.directive'
import { PickerListItemCandidateDirective } from './picker-list-item-candidate.directive'

@Component({
  selector: 'app-item-list-picker',
  templateUrl: './item-list-picker.component.html',
  styleUrls: ['./item-list-picker.component.sass']
})
export class ItemListPickerComponent implements OnInit {

  allPickableItems = [
    { title: 'aaa' },
    { title: 'bbb' },
  ]

  pickedTags = this.allPickableItems

  /** https://alligator.io/angular/reusable-components-ngtemplateoutlet/ */
  @ContentChild(PickerListItemTagDirective, {read: TemplateRef}) itemTagTemplate

  @ContentChild(PickerListItemCandidateDirective, {read: TemplateRef}) itemCandidateTemplate


  constructor() { }

  ngOnInit() {
  }

}
