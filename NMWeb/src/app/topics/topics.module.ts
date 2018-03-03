import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {RouterModule, Routes} from '@angular/router';
import { TopicDetailsComponent } from './topic-details/topic-details.component'
import {MatChipsModule} from '@angular/material'
import { MapsModule } from '../maps/maps.module';
import {TopicsDetailsService} from './topics-details.service';
import { TopicDetailsMapComponent } from './topic-details/topic-details-map/topic-details-map.component'


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
    MapsModule
  ],
  declarations: [
    TopicDetailsComponent,
    TopicDetailsMapComponent,
  ],
  providers: [
    TopicsDetailsService
  ]
})
export class TopicsModule { }
