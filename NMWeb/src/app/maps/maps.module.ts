import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMapComponent } from './users-map/users-map.component';
import {RouterModule, Routes} from '@angular/router'
import { UserPickLocationComponent } from '../map-location-picker/user-pick-location/user-pick-location.component'
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatSliderModule} from '@angular/material'
import {SharedModule} from '../shared/shared.module'
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms';
import {MapsSharedModule} from '../maps-shared/maps-shared.module';
import {UserProfileSharedModule} from '../user-profile-shared/user-profile-shared.module'
import {DialogModule} from 'primeng/dialog'
import {MapLocationsViewerComponent} from '../map-location-picker/map-locations-viewer/map-locations-viewer.component'


const mapsRoutes: Routes = [
  { path: 'users-map',  component: UsersMapComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mapsRoutes),
    MapsSharedModule,
    SharedModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    UserProfileSharedModule,
    DialogModule
  ],
  declarations: [
    UsersMapComponent,
    UserPickLocationComponent,
    MapLocationsViewerComponent
  ],
  exports: [
    UserPickLocationComponent,
    MapLocationsViewerComponent
  ],
  entryComponents: [
    UserPickLocationComponent,
    MapLocationsViewerComponent
  ],
})
export class MapsModule { }
