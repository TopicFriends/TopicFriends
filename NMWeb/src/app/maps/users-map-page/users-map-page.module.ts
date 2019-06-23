import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersMapPageRoutingModule } from './users-map-page-routing.module';
import { UsersMapPageComponent } from './users-map-page.component'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
} from '@angular/material'
import { MapsSharedModule } from '../maps-shared/maps-shared.module'
import { SharedModule } from '../../shared/shared.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { UserProfileSharedModule } from '../../user-profile/user-profile-shared/user-profile-shared.module'
import { DialogModule } from 'primeng/dialog'

@NgModule({
  imports: [
    UsersMapPageRoutingModule,
    CommonModule,
    MapsSharedModule,
    SharedModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    UserProfileSharedModule,
    DialogModule
  ],
  declarations: [
    UsersMapPageComponent
  ]
})
export class UsersMapPageModule { }
