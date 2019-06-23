import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserConfigComponent} from "./user-config.component";

const routes: Routes = [
  {
    path: '',
    component: UserConfigComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserConfigRoutingModule { }
