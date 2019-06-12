import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingListPageComponent } from './meeting-list-page.component'

const routes: Routes = [
  {
    path: '',
    component: MeetingListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingListRoutingModule { }
