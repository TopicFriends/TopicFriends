import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMapComponent } from './users-map/users-map.component';
import {RouterModule, Routes} from '@angular/router'
import {GeolocationService} from './geolocation.service'
import {AgmCoreModule} from '@agm/core'


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
  ],
  declarations: [
    UsersMapComponent,
  ],
  providers: [
    GeolocationService,
  ]
})
export class MapsModule { }
