import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {RouterModule, Routes} from '@angular/router';
import { TopicDetailsComponent } from './topic-details.component'
import {MatChipsModule} from '@angular/material'
import {TopicsDetailsService} from './topics-details.service';
import { TopicsMapComponent } from '../topics-map-shared/topics-map.component'
import {TopicsMapSharedModule} from '../topics-map-shared/topics-map-shared.module'
import {MapsSharedModule} from '../maps-shared/maps-shared.module'


export const TOPIC_ID_PARAM = 'topicId'

const topicsRoutes: Routes = [
  { path: 'topic/:' + TOPIC_ID_PARAM, component: TopicDetailsComponent },
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(topicsRoutes),
    MatChipsModule,
    TopicsMapSharedModule,
  ],
  declarations: [
    TopicDetailsComponent,
  ],
  providers: [
    TopicsDetailsService
  ]
})
export class TopicDetailsModule { }
