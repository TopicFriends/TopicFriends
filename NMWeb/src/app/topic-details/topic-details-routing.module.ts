import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicDetailsComponent} from "./topic-details.component";

const routes: Routes = [
  {
    path: '' ,
    component: TopicDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TopicDetailsRoutingModule { }
