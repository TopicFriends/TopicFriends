import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module'
import { TopicsListPageComponent } from './topics-list-page.component'
import { TopicsEditSharedModule } from '../topics-edit-shared/topics-edit-shared.module'
import { TopicsSharedModule } from '../topics-shared/topics-shared.module'
import { TopicListPageRoutingModule } from './topics-list-page-routing.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopicsSharedModule,
    TopicsEditSharedModule,
    TopicListPageRoutingModule,
  ],
  declarations: [
    TopicsListPageComponent,
  ],
  exports: [
    SharedModule
  ]
})
export class TopicsListPageModule { }
