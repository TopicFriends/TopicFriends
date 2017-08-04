import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdChipList, MdChipsModule, MdIconModule, MdInputModule, MdMenuModule,
  MdSlideToggleModule,
} from '@angular/material'
import {TopicTagComponent} from './topic-tag/topic-tag.component'
import {TopicTagListComponent} from './topic-tag-list/topic-tag-list.component'

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
  ],
  declarations: [
    TopicTagComponent,
    TopicTagListComponent,
  ],
  exports: [
    TopicTagComponent,
    TopicTagListComponent,
  ],
})
export class SharedModule { }
