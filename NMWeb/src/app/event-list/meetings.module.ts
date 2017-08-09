/**
 * Created by anna on 24/06/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MeetingListComponent }    from './meeting-list.component';
import { MeetingListItemComponent }  from './meeting-list-item/meeting-list-item.component';
import { MeetingDetailsComponent }  from './meeting-details/meeting-details.component';
import { MdListModule, MdCardModule, MdButtonModule } from '@angular/material';
import { GoingButtonComponent } from './going-button/going-button.component';
import {MeetingAttendanceService} from './meeting-attendance.service';

const meetingRoutes: Routes = [
  { path: 'meeting-list',  component: MeetingListComponent },
  { path: 'meeting-details/:id', component: MeetingDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    RouterModule.forChild(meetingRoutes)
  ],
  declarations: [
    MeetingListComponent,
    MeetingListItemComponent,
    MeetingDetailsComponent,
    GoingButtonComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MeetingAttendanceService
  ]
})
export class MeetingsModule { }
