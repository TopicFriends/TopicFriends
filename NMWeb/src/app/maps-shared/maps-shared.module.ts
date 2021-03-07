import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {AgmCoreModule} from '@agm/core'
import { UserProfilePopupComponent } from './user-profile-popup/user-profile-popup.component';
import { MapsPopupService } from './maps-popup.service'


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule,
  ],
  declarations: [
    UserProfilePopupComponent,
  ],
  exports: [
    SharedModule,
    AgmCoreModule,
    UserProfilePopupComponent,
  ],
  providers: [
    MapsPopupService,
  ]
})
export class MapsSharedModule { }
