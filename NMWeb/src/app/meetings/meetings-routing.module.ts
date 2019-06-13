import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const MEETING_ID = 'meetingId'

const routes: Routes = [
  { path: `:${MEETING_ID}/edit`,
    loadChildren: './meeting-details-edit-page/meeting-details-edit-page.module#MeetingDetailsEditPageModule' },
  { path: `:edit/:${MEETING_ID}`,
    loadChildren: './meeting-details-edit-page/meeting-details-edit-page.module#MeetingDetailsEditPageModule' },
  { path: ``,
    loadChildren: './meeting-list-page/meeting-list-page.module#MeetingListPageModule' },
  { path: `:${MEETING_ID}`,
    loadChildren: './meeting-details-page/meeting-details-page.module#MeetingDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule {
}
