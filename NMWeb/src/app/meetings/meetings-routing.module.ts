import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':meetingId/edit',
    loadChildren: './meeting-details-edit-page/meeting-details-edit-page.module#MeetingDetailsEditPageModule' },
  { path: 'edit/:meetingId',
    loadChildren: './meeting-details-edit-page/meeting-details-edit-page.module#MeetingDetailsEditPageModule' },
  { path: '',
    loadChildren: './meeting-list-page/meeting-list-page.module#MeetingListPageModule' },
  { path: ':meetingId',
    loadChildren: './meeting-details-page/meeting-details-page.module#MeetingDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
