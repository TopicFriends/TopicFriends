import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ManageTopicsComponent} from "./manage-topics/manage-topics.component";

const routes: Routes = [
  {
    path: 'topics',
    component: ManageTopicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
