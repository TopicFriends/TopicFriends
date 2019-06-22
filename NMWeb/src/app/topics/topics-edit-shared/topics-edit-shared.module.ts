import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListInputComponent } from './item-list-input/item-list-input.component'
import { TopicsSharedModule } from '../topics-shared/topics-shared.module'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
} from '@angular/material'
import {
  ReactiveFormsModule,
} from '@angular/forms'

export const exportDeclarations = [
  ItemListInputComponent,
]

@NgModule({
  imports: [
    CommonModule,
    TopicsSharedModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    ...exportDeclarations,
  ],
  exports: [
    ...exportDeclarations,
  ]
})
export class TopicsEditSharedModule { }
