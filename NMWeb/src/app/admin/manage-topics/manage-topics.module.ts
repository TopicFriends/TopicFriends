import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageTopicsRoutingModule} from "./manage-topics-routing.module";
import {ListTopicsComponent} from "./list-topics/list-topics.component";
import {MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditTopicComponent} from "./edit-topic/edit-topic.component";
import {RouterModule} from "@angular/router";
import {UserProfileDetailsModule} from "../../user-profile-details/user-profile-details.module";

@NgModule({
  imports: [
    CommonModule,
    ManageTopicsRoutingModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    UserProfileDetailsModule,
  ],
  declarations: [
    ListTopicsComponent,
    EditTopicComponent,
  ]
})
export class ManageTopicsModule { }
