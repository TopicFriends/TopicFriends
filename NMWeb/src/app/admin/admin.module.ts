import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import {ManageTopicsComponent} from "./manage-topics/manage-topics.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
    ManageTopicsComponent,
  ]
})
export class AdminModule { }
