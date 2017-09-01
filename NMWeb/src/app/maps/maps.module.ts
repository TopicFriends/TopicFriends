import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMapComponent } from './users-map/users-map.component';
import {RouterModule, Routes} from '@angular/router'
import {AgmCoreModule} from '@agm/core'
import { UserPickLocationComponent } from './user-pick-location/user-pick-location.component'
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSliderModule} from '@angular/material'
import {SharedModule} from '../shared/shared.module'
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms';
import { DistancePipe } from './users-map/distance.pipe'


const mapsRoutes: Routes = [
  { path: 'users-map',  component: UsersMapComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mapsRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8eJ4NjIFWy0tABOEasmykdAj8e7aenL0',
      libraries: [
        "places",
        "geometry"
      ]
    }),
    SharedModule,
    MdButtonModule,
    FlexLayoutModule,
    MdInputModule,
    MdIconModule,
    MdSliderModule,
    FormsModule,
  ],
  declarations: [
    UsersMapComponent,
    UserPickLocationComponent,
    DistancePipe,
  ],
  exports: [
    UserPickLocationComponent,
  ],
  entryComponents: [
    UserPickLocationComponent,
  ],
})
export class MapsModule { }
