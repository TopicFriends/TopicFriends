import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsListPageComponent } from './topics-list-page.component'

const routes: Routes = [
  {
    path: '' ,
    component: TopicsListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TopicListPageRoutingModule { }
