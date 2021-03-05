import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListPageRoutingModule } from './user-list-page-routing.module';
import { UserListPage } from './user-list.page'
import { SharedModule } from '../shared/shared.module'
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
} from '@angular/material';
import { UserProfileSharedModule } from '../user-profile/user-profile-shared/user-profile-shared.module'

@NgModule({
  imports: [
    CommonModule,
    UserListPageRoutingModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatButtonToggleModule,
    MatButtonModule,
    UserProfileSharedModule,
  ],
  declarations: [
    UserListPage,
  ]
})
export class UserListPageModule { }
