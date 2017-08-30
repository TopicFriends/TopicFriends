import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMapComponent } from './users-map/users-map.component';
import {RouterModule, Routes} from '@angular/router'
import {AgmCoreModule} from '@agm/core'
import {UserProfileModule} from '../user-profile/user-profile.module';
import { UserPickLocationComponent } from './user-pick-location/user-pick-location.component'
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule} from '@angular/material'
import {SharedModule} from '../shared/shared.module'


const meetingRoutes: Routes = [
  { path: 'users-map',  component: UsersMapComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(meetingRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8eJ4NjIFWy0tABOEasmykdAj8e7aenL0'
    }),
    SharedModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule
  ],
  declarations: [
    UsersMapComponent,
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
