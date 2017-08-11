import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdChipList, MdChipsModule, MdIconModule, MdInputModule, MdMenuModule,
  MdSlideToggleModule, MdSnackBar, MdSnackBarModule,
} from '@angular/material'
import {TopicTagComponent} from './topic-tag/topic-tag.component'
import {TopicTagListComponent} from './topic-tag-list/topic-tag-list.component'
import {SnackBarComponent} from './snackbar/snackbar.component'

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    MdChipsModule,
    MdIconModule,
    MdSnackBarModule,
  ],
  declarations: [
    TopicTagComponent,
    TopicTagListComponent,
    SnackBarComponent,
  ],
  exports: [
    TopicTagComponent,
    TopicTagListComponent,
    SnackBarComponent,
  ],
  providers: [
    SnackBarComponent,
  ]
})
export class SharedModule { }
