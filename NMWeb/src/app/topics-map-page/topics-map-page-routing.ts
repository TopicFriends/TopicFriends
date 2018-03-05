import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicsMapPageComponent} from './topics-map-page.component'

export const TOPIC_ID_PARAM = 'topicId'


const topicsMapRoutes: Routes = [
  //{ path: 'topics-map/:' + TOPIC_ID_PARAM, component: TopicsMapPageComponent },
];


@NgModule({
  imports: [RouterModule.forChild(topicsMapRoutes)],
  exports: [RouterModule]
})
export class TopicsMapPageRoutingModule { }
