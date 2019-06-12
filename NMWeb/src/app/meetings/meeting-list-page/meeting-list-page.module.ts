import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { MeetingListPageComponent } from './meeting-list-page.component';
import { MeetingListItemComponent } from './meeting-list-item/meeting-list-item.component';
import { MatListModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MeetingAttendanceUserListComponent } from '../meeting-details-page/meeting-attendance-user-list/meeting-attendance-user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MeetingsSharedModule } from '../meetings-shared/meetings-shared.module';
import { MeetingListComponent } from './meeting-list/meeting-list.component'
import { MeetingListRoutingModule } from './meeting-list-routing.module'

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SharedModule,
    MeetingListRoutingModule,
    MeetingsSharedModule,
  ],
  declarations: [
    MeetingListPageComponent,
    MeetingListItemComponent,
    MeetingListComponent,
  ],
  exports: [
    RouterModule
  ],
})
export class MeetingListPageModule { }
