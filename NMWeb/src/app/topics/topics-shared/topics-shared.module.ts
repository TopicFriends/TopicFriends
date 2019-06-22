import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicLogoComponent } from './topic-logo/topic-logo.component';
import { TopicsPickerComponent } from './topics-picker/topics-picker.component'
import { TopicTagListComponent } from './topic-tag-list/topic-tag-list.component'
import { TopicTagComponent } from './topic-tag/topic-tag.component'
import { SharedModule } from '../../shared/shared.module'

let exportComponents = [
  TopicLogoComponent,
  TopicsPickerComponent,
  TopicTagListComponent,
  TopicTagComponent,
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ...exportComponents,
  ],
  exports: exportComponents
})
export class TopicsSharedModule { }
