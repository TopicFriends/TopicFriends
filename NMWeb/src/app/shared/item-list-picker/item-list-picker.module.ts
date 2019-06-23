import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListPickerComponent } from './item-list-picker.component'
import { PickerListItemTagDirective } from './picker-list-item-tag.directive';
import { PickerListItemCandidateDirective } from './picker-list-item-candidate.directive'

const exportDeclarations = [
  ItemListPickerComponent,
  PickerListItemTagDirective,
  PickerListItemCandidateDirective,
]

  @NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...exportDeclarations,
  ],
  exports: [
    ...exportDeclarations,
  ]
})
export class ItemListPickerModule { }
