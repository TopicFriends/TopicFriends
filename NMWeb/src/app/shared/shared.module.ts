import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipList, MdChipsModule, MdCommonModule,
  MdIconModule, MdInputModule,
  MdMenuModule,
  MdSlideToggleModule,
} from '@angular/material'
import {TopicTagComponent} from './topic-tag/topic-tag.component'
import {TopicTagListComponent} from './topic-tag-list/topic-tag-list.component'
import {UserTemplateComponent} from '../user-list/user-template/user-template.component';
import {UserInterestsModeViewComponent} from '../user-list/user-template/user-interests-mode-view/user-interests-mode-view.component';

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
    MdCardModule
  ],
  declarations: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent
  ],
  exports: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent
  ],
})
export class SharedModule { }
