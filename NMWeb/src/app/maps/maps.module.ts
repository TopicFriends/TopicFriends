import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMapPageComponent } from './users-map-page/users-map-page.component';
import {RouterModule, Routes} from '@angular/router'
import { UserPickLocationComponent } from '../map-location-picker/user-pick-location/user-pick-location.component'
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatSliderModule} from '@angular/material'
import {SharedModule} from '../shared/shared.module'
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms';
import {MapsSharedModule} from '../maps-shared/maps-shared.module';
import {UserProfileSharedModule} from '../user-profile-shared/user-profile-shared.module'
import {DialogModule} from 'primeng/dialog'


@NgModule({
  imports: [
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
    UserPickLocationComponent,
  ],
  exports: [
    UserPickLocationComponent,
  ],
  entryComponents: [
    UserPickLocationComponent,
  ],
})
export class MapsModule { }
