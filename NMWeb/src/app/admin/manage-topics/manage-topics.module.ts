import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageTopicsRoutingModule} from "./manage-topics-routing.module";
import {ListTopicsComponent} from "./list-topics/list-topics.component";
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditTopicComponent} from "./edit-topic/edit-topic.component";
import {RouterModule} from "@angular/router";
import {UserProfileDetailsModule} from "../../user-profile-details/user-profile-details.module";
import {SharedModule} from 'primeng/components/common/shared';

@NgModule({
  imports: [
    CommonModule,
    ManageTopicsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    UserProfileDetailsModule,
    SharedModule,
  ],
  declarations: [
    ListTopicsComponent,
    EditTopicComponent,
  ]
})
export class ManageTopicsModule { }
