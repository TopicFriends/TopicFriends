import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingDetailsEditPageComponent } from './meeting-details-edit-page.component'

const routes: Routes = [
  {
    path: '', component: MeetingDetailsEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingDetailsEditPageRoutingModule { }
