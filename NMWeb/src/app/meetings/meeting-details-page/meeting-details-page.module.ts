import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingDetailsRoutingModule } from './meeting-details-routing.module';
import { MeetingsSharedModule } from '../meetings-shared/meetings-shared.module'
import { MeetingDetailsComponent } from './meeting-details.component'
import { MatCardModule } from '@angular/material'
import { MeetingMapComponent } from './meeting-map/meeting-map.component'
import { MapsSharedModule } from '../../maps/maps-shared/maps-shared.module'
import { MeetingAttendanceUserListComponent } from './meeting-attendance-user-list/meeting-attendance-user-list.component'
import { UserProfileSharedModule } from '../../user-profile/user-profile-shared/user-profile-shared.module'

@NgModule({
  imports: [
    CommonModule,
    MeetingDetailsRoutingModule,
    MeetingsSharedModule,
    MatCardModule,
    MapsSharedModule,
    UserProfileSharedModule,
  ],
  declarations: [
    MeetingDetailsComponent,
    MeetingMapComponent,
    MeetingAttendanceUserListComponent,
  ]
})
export class MeetingDetailsPageModule { }
