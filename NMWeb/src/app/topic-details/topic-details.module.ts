import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { TopicDetailsComponent } from './topic-details.component'
import { MatChipsModule } from '@angular/material'
import { TopicsDetailsService } from './topics-details.service';
import { TopicsMapSharedModule } from '../topics-map-shared/topics-map-shared.module'
import { TOPIC_ID_PARAM } from '../shared/routes'

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
