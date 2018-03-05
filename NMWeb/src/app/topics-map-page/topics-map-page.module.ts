import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {RouterModule, Routes} from '@angular/router'
import {TopicsMapPageComponent} from './topics-map-page.component'

export const TOPIC_ID_PARAM = 'topicId'


const topicsMapRoutes: Routes = [
  { path: 'topics-map-page/:' + TOPIC_ID_PARAM, component: TopicsMapPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(topicsMapRoutes),
  ],
  declarations: [
    TopicsMapPageComponent
  ],
  exports: [
    SharedModule
  ]
})
export class TopicsMapPageModule { }
