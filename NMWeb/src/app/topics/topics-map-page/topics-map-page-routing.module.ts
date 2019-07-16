import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicsMapPageComponent} from './topics-map-page.component'
import { TOPIC_ID_PARAM } from '../../shared/routes'


const topicsMapRoutes: Routes = [
  {
    path: `:${TOPIC_ID_PARAM}`,
    component: TopicsMapPageComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(topicsMapRoutes)],
  exports: [RouterModule]
})
export class TopicsMapPageRoutingModule { }
