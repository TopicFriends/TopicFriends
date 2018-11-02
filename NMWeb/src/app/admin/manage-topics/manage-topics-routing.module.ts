import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListTopicsComponent} from "./list-topics/list-topics.component";
import {EditTopicComponent} from "./edit-topic/edit-topic.component";

const routes: Routes = [
  {
    path: '',
    component: ListTopicsComponent,
  },
  {
    path: 'create',
    component: EditTopicComponent,
  },
  {
    path: ':topicId/edit',
    component: EditTopicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    // ListTopicsComponent
  ]
})
export class ManageTopicsRoutingModule { }
