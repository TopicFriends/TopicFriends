import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTopicsService } from './user-topics.service'
import { TopicsService } from './topics.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserTopicsService,
    TopicsService,
  ]
})
export class TopicsCoreModule { }
