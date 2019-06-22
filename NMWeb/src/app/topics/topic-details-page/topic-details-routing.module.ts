import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicDetailsComponent} from "./topic-details.component";
import { TOPIC_ID_PARAM } from '../../shared/routes'

const routes: Routes = [
  {
    path: `:${TOPIC_ID_PARAM}` ,
    component: TopicDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TopicDetailsRoutingModule { }
