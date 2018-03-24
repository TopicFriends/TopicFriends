import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicLogoComponent } from './topic-logo/topic-logo.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopicLogoComponent,
  ],
  exports: [
    TopicLogoComponent,
  ]
})
export class TopicsSharedModule { }
