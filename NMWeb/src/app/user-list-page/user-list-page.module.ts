import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListPageRoutingModule } from './user-list-page-routing.module';
import { UserListPage } from './user-list.page'
import { SharedModule } from '../shared/shared.module'
import {
  MatOptionModule,
  MatSelectModule,
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    UserListPageRoutingModule,
    SharedModule,
    MatOptionModule,
    MatSelectModule,
  ],
  declarations: [
    UserListPage,
  ]
})
export class UserListPageModule { }
