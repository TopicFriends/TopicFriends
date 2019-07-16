import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListPickerComponent } from './topic-list-picker/topic-list-picker.component'
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
  TopicListPickerComponent,
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
