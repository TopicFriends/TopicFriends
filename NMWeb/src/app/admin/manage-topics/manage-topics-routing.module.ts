import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListTopicsComponent} from "./list-topics/list-topics.component";

const routes: Routes = [
  {
    path: '',
    component: ListTopicsComponent,
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
