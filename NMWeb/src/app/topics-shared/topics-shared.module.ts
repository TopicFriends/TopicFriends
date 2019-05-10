import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicLogoComponent } from './topic-logo/topic-logo.component';
import { TopicsPickerComponent } from './topics-picker/topics-picker.component'

let declarations = [
  TopicLogoComponent,
  TopicsPickerComponent,
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: declarations,
  exports: declarations
})
export class TopicsSharedModule { }
