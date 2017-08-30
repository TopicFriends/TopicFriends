import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {RouterModule, Routes} from '@angular/router';
import { TopicDetailsComponent } from './topic-details/topic-details.component'
import {MdChipsModule} from '@angular/material'


export const TOPIC_ID_PARAM = 'topicId'

const topicsRoutes: Routes = [
  { path: 'topic/:' + TOPIC_ID_PARAM, component: TopicDetailsComponent },
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(topicsRoutes),
    MdChipsModule,
  ],
  declarations: [
    TopicDetailsComponent,
  ],
})
export class TopicsModule { }
