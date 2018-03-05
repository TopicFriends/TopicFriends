import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {TopicDetailsMapComponent} from './topics-map.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TopicDetailsMapComponent
  ],
  exports: [
    SharedModule
  ]
})
export class TopicsMapSharedModule { }
