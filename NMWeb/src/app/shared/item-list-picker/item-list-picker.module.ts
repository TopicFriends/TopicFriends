import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListPickerComponent } from './item-list-picker.component'
import { PickerListItemTagDirective } from './picker-list-item-tag.directive';
import { PickerListItemCandidateDirective } from './picker-list-item-candidate.directive'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
} from '@angular/material'
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'

const exportDeclarations = [
  ItemListPickerComponent,
  PickerListItemTagDirective,
  PickerListItemCandidateDirective,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    ...exportDeclarations,
  ],
  exports: [
    ...exportDeclarations,
  ]
})
export class ItemListPickerModule { }
